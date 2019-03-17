import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import { loadRadarData } from "../../helpers/helpers";

import {
  EuiPanel,
  EuiFlexGrid
} from "@elastic/eui";

export default class Radar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: undefined
    };

  }

  componentDidMount() {
      this.drawChart(this.state.user);
  }

  componentWillReceiveProps(props){
    //console.log(props);
    this.drawChart(props.user);

  }

  drawChart(user){
    const radarDataPre = loadRadarData();
    let radarData;
    if (user == undefined){
        //解析所有用戶信息
        radarData = radarDataPre.map((obj, idx) => Object.values(obj)[0]);
    }else{
        //解析單個用戶信息
        radarData = radarDataPre.filter((item, idx, array) => Object.keys(item)[0] == user);
        radarData = Object.values(radarData[0]);
    }
    
    //let radarData = radarDataPre.map((obj, idx) => Object.values(obj)[0]);
    let radarChart = echarts.init(document.getElementById('radar'));
        let option = {
            title: {
                text: '雷达图',
                // left: 'center',
                textStyle: {
                    fontWeight: 'bold',              //标题颜色
                    color: '#B7B7B7'
                  },
            },
            radar: {
                indicator: [
                    { name: '登录', max: 1 },
                    { name: '文件', max: 1 },
                    { name: '网络', max: 1 },
                    { name: '注册表', max: 1 },
                    { name: '进程', max: 1 },
                    { name: 'Other', max: 1 }
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: '#B7B7B7'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#453893', '#504694','#635AA1','#776FAD','#8984B8','#9D98C2'].reverse(), //圓圈顏色
                        opacity:0.8
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#A892FE'//放射線顏色
                    }
                }
            },
            series: [
                {
                    name: '',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: radarData,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.RadialGradient(
                                0, 1, 1.7, [{
                                offset: 0.4,
                                color: '#FF7E53'
                            }, {
                                offset: 1,
                                color: '#FF666E'
                            }], false),
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.4
                        }
                    }
                }
            ]
        };

        radarChart.setOption(option);
  }

  render() {
    
    return (
      <EuiPanel className="chart-panel">
        <div
          id="radar"
          style={{ width: this.props.width, height: this.props.height }}
        />
      </EuiPanel>
    );
  }
}
