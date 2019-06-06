import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import { loadDependencies } from "../../helpers/helpers";
import ReactEcharts from 'echarts-for-react';


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

export default class Dependencies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ["#4E6FFA", "#8762FF", "#FF5C79", "#FF7E53"]
        };
    }

    componentDidMount() {
        let themeColor = this.props.themeColor;
        let themeChoose = this.props.themeChoose;
        this.setState({color: themeColor[themeChoose]});
        //console.log(this.state.color);
      }
    
    componentWillReceiveProps(props){
        let themeColor = props.themeColor;
        let themeChoose = props.themeChoose;
        this.setState({color: themeColor[themeChoose]});
        //console.log(this.state.color);
    }
    
    getOption(themeColor){
        let dependencies = loadDependencies(themeColor);
        return ({
            title: {
                text: 'NPM Dependencies',
                textStyle: {
                    fontWeight: 'bold',              //标题颜色
                    color: '#B7B7B7'
                  },
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
                {
                    type: 'graph',
                    layout: 'none',
                    // progressiveThreshold: 700,
                    data: dependencies.nodes.map(function (node) {
                        return {
                            x: node.x,
                            y: node.y,
                            id: node.id,
                            name: node.label,
                            symbolSize: node.size,
                            itemStyle: {
                                normal: {
                                    color: node.color,
                                    opacity:0.8
                                    //color: "#4E6FFA"
                                }
                            }
                        };
                    }),
                    edges: dependencies.edges.map(function (edge) {
                        return {
                            source: edge.sourceID,
                            target: edge.targetID
                        };
                    }),
                    label: {
                        emphasis: {
                            position: 'right',
                            show: true
                        }
                    },
                    roam: true,
                    focusNodeAdjacency: true,
                    lineStyle: {
                        normal: {
                            width: 0.5,
                            curveness: 0.3,
                            opacity: 0.7
                        }
                    }
                }
            ]
        })
    }

  render() {
    return (
      <EuiPanel className="chart-panel">
        <ReactEcharts option={this.getOption(this.state.color)} style={{ height: this.props.height }} />
      </EuiPanel>
    );
  }
}
