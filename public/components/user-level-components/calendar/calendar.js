import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import { loadCalendarData } from "../../helpers/helpers";

import {
  EuiPanel,
  EuiFlexGrid
} from "@elastic/eui";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    

    this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
      this.drawChart();
  }
  
  drawChart(){
    let calendarData = loadCalendarData();
    let calendarChart = echarts.init(document.getElementById('calendar'));
        let option = {
            //color: ['#4E6FFA', '#8762FF','#FF5C79','#FF7E53'],
            title: {
                // top: 30,
                text: 'Calendar',
                textStyle: {
                    fontWeight: 'bold',              //标题颜色
                    color: '#B7B7B7'
                  },
            },

            xAxis: {
                type: 'category',
                splitArea: {
                    show: true,
                    
                },
                nameTextStyle: {
                    color: ['#ffffff']
                  },
                  axisLine:{
                    lineStyle:{
                        color:'#A892FE'
                    }
                  },
                  itemStyle: {
                    normal: {
                        color: '#323c48',
                        borderWidth: 1,
                        borderColor: '#111'
                    },
                    //backgroundColor:"rgba(12,34,56,0.9)"
                }
            },
            yAxis: {
                type: 'category',
                // data: ['user1', 'user2', 'user3', 'user4'],
                splitArea: {
                    show: true,
                    areaStyle:{
                        color:[
                            "#453893","#362c79"
                        ]
                    }
                },
                nameTextStyle: {
                    color: ['#ffffff']
                  },
                  axisLine:{
                    lineStyle:{
                        color:'#A892FE'
                    }
                  },
                  

            },
            dataZoom: [
                {
                    type: 'slider',
                    textStyle: {color: '#b7b7b7'},
                    backgroundColor: '#201546',
                    borderColor: 'rgba(255,255,255,0.2)',
                    fillerColor:'rgba(255,255,255,0.2)',
                    start: 0
                }
            ],

            series: [ //根據事件數量設置不同點點大小
                {
                    name: '登录事件',
                    type: 'scatter',
                    // coordinateSystem: 'calendar',
                    data: calendarData,
                    symbolSize: function (val) {
                        return 20 / val[2];
                    },
                    itemStyle: {
                        normal: {
                            color:'#ff5c79', //普通點點顏色
                        }
                    },
                    
                },
                {
                    name: '稀少事件',
                    color: '#B7B7B7',
                    
                    type: 'effectScatter',
                    // coordinateSystem: 'calendar',
                    data: calendarData.filter(e => e[2] <= 2),
                    symbolSize: function (val) {
                        return 20 / val[2];
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    itemStyle: {
                        normal: {
                            color: '#ff7e53',
                            shadowBlur: 10,
                            shadowColor: '#453893'
                        }
                    },
                    zlevel: 1,
                    
                },
                
            ]
        };
        calendarChart.setOption(option);

        //設立點擊事件
        calendarChart.on('click', (params) => this.props.handleUser(params.value[1]));
  }

  render() {
    
    return (
      <EuiPanel className="chart-panel">
        <div
          id="calendar"
          style={{ width: this.props.width, height: this.props.height }}
        />
      </EuiPanel>
    );
  }
}
