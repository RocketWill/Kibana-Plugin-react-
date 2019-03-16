//import React from 'react';
import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
//引入 ECharts 3D 模塊
import 'echarts-gl';
import 'echarts';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// 引入d3
import * as d3 from "d3";
//引入 es 自定義 html tag
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
} from '@elastic/eui';

//引入圖表

//桑基圖
import Sankey from '../sanky/sanky'
//error report
import ScatterPlot from '../scatterPlot/scatterPlot'

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Security Analysis",
      authors: ["程詠", "周旺"]
    };
  }

  componentDidMount() {
    /*
       FOR EXAMPLE PURPOSES ONLY.  There are much better ways to
       manage state and update your UI than this.
    */
    
  }
  render() {
    
    return (
      <EuiPage className="bg siemens">
        <EuiPageBody>
          <EuiPageHeader>
            <EuiTitle size="l">
            <h1 className="font-white">{this.state.title}<span className="author font-white"> created by {this.state.authors.map((author, index)=> author).join(' and ')}</span></h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent className="page-content">
            <EuiPageContentHeader>
              <EuiTitle>
                {/* 注意：裡面一定要放child elements */}
                <h2>Congratulations</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>

              <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                  <Sankey queryIndex={"winlog*"} width={"100%"} />
                </EuiFlexItem>

                <EuiFlexItem grow={1}>
                  <ScatterPlot width={"100%"} />
                </EuiFlexItem>
              </EuiFlexGroup>
  
              

            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
