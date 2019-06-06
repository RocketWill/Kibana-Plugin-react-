import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import { loadScatter3Data } from "../../helpers/helpers";

import {
  EuiPanel,
  EuiFlexGrid
} from "@elastic/eui";

export default class Scatter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      this.setState({
        processes: loadScatter3Data()[0],
        words: loadScatter3Data()[1]
      });
      let themeColor = this.props.themeColor;
      let themeChoose = this.props.themeChoose;
      this.drawChart(themeColor[themeChoose]);
  }

  componentWillReceiveProps(props){
    let themeColor = props.themeColor;
    let themeChoose = props.themeChoose;
    this.drawChart(themeColor[themeChoose]);
  }

  drawChart(themeColor){
    let [processes, words] = loadScatter3Data();
    // let words = this.state.words;
    let scattar3dChart = echarts.init(document.getElementById('scatter3'));
    // specify chart configuration item and data
    let option = {
        color: themeColor,
        title: {
            text: 'Behavior2vec',
            textStyle: {
                fontWeight: 'bold',              //标题颜色
                color: '#B7B7B7'
            },
        },
        tooltip: {
            formatter: (d) => {
                return Object.keys(words)[d.dataIndex];
            }
        },
        legend: {
            data: ['文件'],
            textStyle: {
                fontWeight: 'bold',              //标题颜色
                color: '#B7B7B7'
            },
        },
        xAxis3D: {
            type: 'value',
            show: false,
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['rgba(0,0,0,0)']
                }
            },
            nameTextStyle: {
                color: ['rgba(0,0,0,0)']
            },
            axisLine:{
                lineStyle:{
                color:'rgba(0,0,0,0)'
                }
            }
        },
        yAxis3D: {
            type: 'value',
            show: false,
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['rgba(0,0,0,0)']
                }
            },
            nameTextStyle: {
                color: ['rgba(0,0,0,0)']
            },
            axisLine:{
                lineStyle:{
                color:'rgba(0,0,0,0)'
                }
            }
        },
        zAxis3D: {
            type: 'value',
            show: false,
            splitLine: {
                lineStyle: {
                    // 使用深浅的间隔色
                    color: ['rgba(0,0,0,0)']
                }
            },
            nameTextStyle: {
                color: ['rgba(0,0,0,0)']
            },
            axisLine:{
                lineStyle:{
                color:'rgba(0,0,0,0)'
                }
            }
        },
        grid3D: {
            axisLine: {
                lineStyle: {
                    color: '#A892FE'
                }
            },
            axisPointer: {
                lineStyle: {
                    color: '#A892FE'
                }
            },
            viewControl: {
                autoRotate: true,
                //projection: 'orthographic'
            }
        },
        series: [{
            name: '文件',
            textStyle: {
                fontWeight: 'bold',              //标题颜色
                color: '#B7B7B7'
            },
            type: 'scatter3D',
            data: Object.values(words),
            lineStyle: {
                width: 4
            },
            symbolSize: 5,
            // symbol: 'triangle',
            itemStyle: {
                borderWidth: 0,
                borderColor: '#ffffff',
                color:themeColor[3], //點點顏色
                opacity:0.8
            },
            emphasis: {
                itemStyle: {
                    color: themeColor[1]
                }
            }
        }]
    };
    var line;
    // deal process data
    processes.filter((e, i) => i < 5).forEach(process => {
        line = {
            type: 'line3D',
            data: process['events'].filter(e => words[e]).map(e => words[e]),
            lineStyle: {
                width: 4
            }
        };
        option.series.push(line);
    })

    // use configuration item and data specified to show chart
    scattar3dChart.setOption(option);
  }

  render() {
    
    return (
      <EuiPanel className="chart-panel">
        <div
          id="scatter3"
          style={{ width: this.props.width, height: this.props.height }}
        />
      </EuiPanel>
    );
  }
}
