import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import {dataHandleHelper} from './dataHandle';
import {
  EuiPage,
  EuiPageHeader,
  EuiTitle,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentHeader,
  EuiPageContentBody,
  EuiText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiCard,
  EuiIcon,
  EuiCode,
  EuiPanel,
  EuiFlexGrid
} from "@elastic/eui";

export default class Sankey extends Component {
  constructor(props) {
    super(props);
    this.queryIndex = props.queryIndex;
    this.range = props.range;
    this.state={
      range: props.range
    };
  }

  componentDidMount() {
      let themeColor = this.props.themeColor;
      let themeChoose = this.props.themeChoose;
      this.drawChart(this.props.range[0], this.props.range[1], themeColor[themeChoose]);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if (nextState.range == this.state.range){
  //     return false;
  //   }
  //   if (nextProps == undefined || nextState == undefined){
  //     return false;
  //   }
  //   let themeColor = nextState.themeColor;
  //   let themeChoose = nextState.themeChoose;
  //   console.log(themeChoose);
  //   this.drawChart(nextState.range[0], nextState.range[1], themeColor[themeChoose]);
  // }

  componentWillReceiveProps(props){
    let themeColor = props.themeColor;
    let themeChoose = props.themeChoose;
    this.drawChart(props.range[0], props.range[1], themeColor[themeChoose]);
  }

  
  drawChart(start, end, themeColor){
    let elasticsearch = require("elasticsearch-browser/elasticsearch.js");
    let client = new elasticsearch.Client({
      host: "localhost:9200"
    });
    

    
    client
      .search({
        index: this.queryIndex,
        size: 1000,
        body: {
          query: {
            range : {
              "@timestamp": {
                gte: start,
                lte: end,
                format: "MM/dd/yyyy||yyyy"
              }
            }
          },
          //聚合
          aggs: {
            table: {
              composite: {
                size: 80,
                sources: [
                  { stk1: { terms: { field: "host.name.keyword" } } },
                  { stk2: { terms: { field: "source_name.keyword" } } },
                  { stk3: { terms: { field: "level.keyword" } } }
                ]
              }
            }
          }
        }
      })
      .then(
        function(body) {
          var sankey = body.aggregations.table.buckets;
          //console.log(sankey);
          let [totalDataNumber, totalNodeNumber, sankeyJson] = dataHandleHelper(sankey);
          let mySankey = echarts.init(document.getElementById("sankey"));

          //開始繪製桑基圖
          mySankey.setOption({
            color: themeColor,
            title: {
              text: "Sankey Diagram",
              textStyle: {
                fontWeight: "bold", //标题颜色
                color: "#B7B7B7"
              }
            },
            tooltip: {
              trigger: "item",
              enterable: true,
              triggerOn: "mousemove",
              formatter: function(params, ticket, callback) {
                console.log(params);
                console.log(params["data"]);
                console.log(ticket);
                if (params["dataType"] == "edge") {
                    return (
                      params["data"]["source"] +
                      " 到 " +
                      params["data"]["target"] +
                      " | 總量: " +
                      params["data"]["value"] +
                      " | 佔比: " +
                      Math.round(
                        ((parseInt(params["data"]["value"]) / parseInt(totalDataNumber)) * 100) / 2
                      ).toString() +
                      "%"
                    );
                  } else {
                    if (totalNodeNumber[params["data"]["name"]] != null) {
                        return (
                          params["data"]["name"] +
                          "總數: " +
                          totalNodeNumber[params["data"]["name"]] +
                          " | 佔比: " +
                          Math.round(
                            ((totalNodeNumber[params["data"]["name"]] /
                              totalDataNumber) *
                              100) /
                              2
                          ) +
                          "%"
                        );
                      } else {
                        return "還沒做好ＸＤ";
                      }
                  }
              }
            },

            series: [
              {
                type: "sankey",
                data: sankeyJson.nodes,
                links: sankeyJson.links,
                right: "10%",
                focusNodeAdjacency: true,
                layoutIterations: 50,
                nodeWidth: 30, //图中每个矩形节点的宽度。
                // nodeGap: 10, //图中每一列任意两个矩形节点之间的间隔。
                // silent:true, //图形是否不响应和触发鼠标事件，默认为 false，即响应和触发鼠标事件。
                animationEasing: "sinusoidalOut",
                itemStyle: {
                  normal: {
                    borderWidth: 0,
                    borderColor: "#aaa"
                  }
                },
                lineStyle: {
                  normal: {
                    curveness: 0.5,
                    color: "source",
                    opacity: 0.5
                  }
                },
                label: {
                  color: "#ffffff",
                  fontWeight: 200,
                  padding: 13
                }
              }
            ]
          });
        },
        function(error) {
          console.trace(error.message);
        }
      );
  }

  render() {
    return <EuiPanel  className="chart-panel"><div id="sankey" style={{ width: this.props.width, height: 600 }}></div></EuiPanel>;
  }
}
