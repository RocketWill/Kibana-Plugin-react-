//import React from 'react';
import React, { Component } from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
//引入 ECharts 3D 模塊
import "echarts-gl";
import "echarts";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
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
} from "@elastic/eui";

//time filter
import TimeFilter from "../filter/time-filter/time-filter";

//引入圖表

//桑基圖
import Sankey from "../system-level-components/sanky/sanky";
//error report
import ScatterPlot from "../system-level-components/scatterPlot/scatterPlot";
//calendar chart
import Calendar from "../user-level-components/calendar/calendar";
//reportable event
import ReportableEvents from "../user-level-components/reportable-events/reportableEvents";
//radar chart
import Radar from "../user-level-components/radar/radar";
//3D scatter plot
import Scatter3 from "../user-level-components/scatter3/scatter3";
//parallel
import Parallel from "../user-level-components/parallel/parallel";

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleTimeRange = this.handleTimeRange.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.state = {
      title: "Security Analysis",
      authors: ["程詠", "周旺"],
      timeRange: ["2018","2019"],
      user: undefined
    };
  }

  handleTimeRange(from, to){
    this.setState({
      timeRange: [from, to]
    });
  }

  handleUser(user){
    this.setState({
      user: user
    });
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
              <h1 className="font-white">
                {this.state.title}
                <span className="author font-white">
                  {" "}
                  created by{" "}
                  {this.state.authors
                    .map((author, index) => author)
                    .join(" and ")}
                </span>
              </h1>
            </EuiTitle>
          </EuiPageHeader>
          <EuiPageContent className="page-content">
            <EuiPageContentHeader>
              <EuiTitle>
                {/* 注意：裡面一定要放child elements */}
                <h2>{this.state.timeRange[0]} to {this.state.timeRange[1]} User: {this.state.user}</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <EuiFlexGroup>
                <EuiFlexItem style={{ maxWidth: 550 }}>
                  <TimeFilter handleTimeRange={this.handleTimeRange} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                  <Sankey queryIndex={"winlog*"} range={this.state.timeRange} width={"100%"} />
                </EuiFlexItem>

                <EuiFlexItem grow={1}>
                  <ScatterPlot width={"100%"} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexGroup>
                <EuiFlexItem style={{ maxWidth: 600 }} grow={1}>
                  <Calendar handleUser={this.handleUser} width={"100%"} height={400} />
                </EuiFlexItem>

                <EuiFlexItem grow={1} style={{ maxWidth: 320 }}>
                  <ReportableEvents width={"100%"} height={400} />
                </EuiFlexItem>

                <EuiFlexItem grow={1} style={{ maxWidth: 400 }}>
                  <Radar width={"100%"} height={400} user={this.state.user} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexGroup>
                <EuiFlexItem style={{ maxWidth: 1370 }}>
                  <Scatter3 width={"100%"} height={500} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexItem grow={8} style={{ maxWidth: 1370 }}>
                <Parallel handleUser={this.handleUser} user={this.state.user} width={"100%"} height={400} />
              </EuiFlexItem>
            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    );
  }
}
