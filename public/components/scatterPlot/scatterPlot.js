import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import { loadScatterPlotData } from "../helpers/helpers";

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

export default class ScatterPlot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      this.drawChart();
  }

  drawChart(){
    var reportChart = echarts.init(document.getElementById("error-report"));
    console.log(reportChart);
    let [report1, report2, report3] = loadScatterPlotData();

    let option = {
      color: ["#4E6FFA", "#8762FF", "#FF5C79", "#FF7E53"],
      legend: {
        y: "top",
        data: ["app crash", "service error", "defender"],
        textStyle: {
          color: "#b7b7b7",
          fontSize: 16
        }
      },
      grid: {
        x: 30,
        x2: 40,
        y: "18%",
        y2: "18%"
      },
      xAxis: {
        type: "time",
        name: "时间",
        nameTextStyle: {
          color: "#fff",
          fontSize: 14
        },

        splitLine: {
          ineStyle: {
            // 使用深浅的间隔色
            color: ["#453893"]
          },
          show: false
        },
        nameTextStyle: {
          color: ["#B7B7B7"]
        },
        axisLine: {
          lineStyle: {
            color: "#A892FE"
          }
        }
      },
      yAxis: {
        type: "value",
        name: "count",
        nameLocation: "end",
        nameGap: 20,
        splitLine: {
          lineStyle: {
            // 使用深浅的间隔色
            color: ["#453893"],
            opacity: 0.5
          }
        },
        nameTextStyle: {
          color: ["#b7b7b7"],
          fontSize: 14
        },
        axisLine: {
          lineStyle: {
            color: "#A892FE"
          }
        }
      },
      dataZoom: [
        {
          type: "slider",
          textStyle: { color: "#b7b7b7" },
          backgroundColor: "#201546",
          borderColor: "rgba(255,255,255,0.2)",
          fillerColor: "rgba(255,255,255,0.2)",
          start: 0
        }
      ],
      series: [
        {
          name: "app crash",
          type: "scatter",
          itemStyle: {
            normal: {
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: report1
        },
        {
          name: "service error",
          type: "scatter",
          itemStyle: {
            normal: {
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: report2
        },
        {
          name: "defender",
          type: "scatter",
          itemStyle: {
            normal: {
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          data: report3
        }
      ]
    };


    reportChart.setOption(option);
  }

  render() {
    
    return (
      <EuiPanel className="chart-panel">
        <div
          id="error-report"
          style={{ width: 400, height: 600 }}
        />
      </EuiPanel>
    );
  }
}
