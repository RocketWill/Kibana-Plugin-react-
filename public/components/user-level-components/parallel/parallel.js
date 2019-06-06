import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";
import { loadParallelData } from "../../helpers/helpers";

import {
  EuiPanel,
  EuiFlexGrid
} from "@elastic/eui";

export default class Parallel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: undefined
    };
  }

  componentDidMount() {
    let themeColor = this.props.themeColor;
    let themeChoose = this.props.themeChoose;
    this.drawChart(this.state.user,themeColor[themeChoose] );
  }

  componentWillReceiveProps(props){
    let themeColor = props.themeColor;
    let themeChoose = props.themeChoose;
    this.drawChart(props.user, themeColor[themeChoose]);
  }

  drawChart(user, themeColor){
    let parallelData = loadParallelData();
    //添加parallel的用戶標籤
    const categoryData = []
    for (let i=0; i<parallelData.length; i++){
        categoryData.push(parallelData[i][0]);
    }

    if (user != undefined) parallelData = loadParallelData().filter((item) => item[0] == user);

    var parallelChart = echarts.init(document.getElementById('parallel'));
    var option = {
        color: [themeColor[2],themeColor[3]],
        title: 
          { text: 'Parallel',
            textStyle: {
              fontWeight: 'bold',              //标题颜色
              color: '#B7B7B7'
            },
          },
        parallelAxis: [
            {
                dim: 0,
                name: '使用者',
                type: 'category',
                data:categoryData
            },
            { dim: 1, name: '登录', inverse: true, nameLocation: 'start' },
            { dim: 2, name: '进程' },
            { dim: 3, name: '文件' },
            { dim: 4, name: '注册表' },
            { dim: 5, name: '网络' }
        ],
        parallel: {
            left: '5%',
            right: '10%',
            bottom: 20,
            parallelAxisDefault: {
                type: 'value',
                name: 'AQI指数',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: ['#B7B7B7']
                  },
                  axisLine:{
                    lineStyle:{
                        color:'#A892FE'
                    }
                  },
                axisTick: {
                    lineStyle: {
                        color: "#A892FE"
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#B7B7B7'
                    }
                },
                triggerEvent:true
            }
        },
        
        series: [
            {
                name: '',
                type: 'parallel',
                lineStyle: {
                    normal: {
                        width: 2,
                        opacity: 0.9,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                              [
                                {offset: 0, color: themeColor[2]},
                                {offset: 1, color: themeColor[3]}
                              ]
                          )
                    },

                },
                data: parallelData
            }
        ]
    };
    parallelChart.setOption(option);

    parallelChart.on('click', (params) => this.props.handleUser(params.value) );
  }

  render() {
    
    return (
      <EuiPanel className="chart-panel">
        <div
          id="parallel"
          style={{ width: this.props.width, height: this.props.height }}
        />
      </EuiPanel>
    );
  }
}
