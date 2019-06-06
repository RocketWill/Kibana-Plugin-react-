//import React from 'react';
import React, { Component } from "react";
// 引入 ECharts 主模块
import echarts from "echarts/lib/echarts";
//引入 ECharts 3D 模块
import "echarts-gl";
import "echarts";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
// 引入d3
import * as d3 from "d3";
//引入动画
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' ; 

// redux 与中间件
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import Particles from 'react-particles-js';
import Sky from 'react-sky';

import Script from 'react-load-script'
//import * as THREE from 'three';
//import "./vanta/vanta.net.min.js";
//import "./vanta/three.r92.min.js";
//import "./vanta/vanta.net.js";


//引入 es 自定义 html tag
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

//引入图表

//桑基图
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
//dependencies
import Dependencies from '../user-level-components/dependencies/dependencies';

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleTimeRange = this.handleTimeRange.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.setThemeColor = this.setThemeColor.bind(this);
    this.state = {
      title: "Security Analysis",
      authors: ["程咏", "周旺"],
      timeRange: ["2018","2019"],
      user: undefined,
      showTimeFilter: false,
      bgColor:"#ac23d3",
      themeChoose: "热情嘉年华",
      themeColor : {
        "热情嘉年华":["#4E6FFA", "#8762FF", "#FF5C79", "#FF7E53"],
        "爱琴海之梦":["#7fb9c2", "#96c4de", "#628ca6", '#f9d0d1'],
        "雅马逊之吻":["#478027", "#bad35c", "#7bac50", "#e4e899"],
        "古埃及之恋":["#c0a172","#d07c46","#b85750","#fce4c2"],
        "波希米亚的春天":["#93c7b8","#ec6862","#a12168","#f2cc5e"],
        //"程咏的心田":["#54a297","#d5536c","#cf6b37","#c756c0"],
      }
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

  setThemeColor(e, data){
    //console.log(item);
    this.setState({
      themeChoose: data
    });
  }

  componentDidMount() {
    this.loadScript("https://raw.githubusercontent.com/tengbao/vanta/master/vendor/three.r92.min.js");
    this.loadScript("https://raw.githubusercontent.com/tengbao/vanta/master/dist/vanta.net.min.js");
    // this.addScript("window.VANTA.NET({el: '#bg'})");
  
   document.body.style.backgroundColor = "yellow";
   // document.getElementsByClassName('bg').style.backgroundColor('yellow')
  }
  componentWillUnmount() {
  }
  
  loadScript(url) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Fire the loading
    head.appendChild(script);
  }

  addScript(content) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var text = document.createTextNode(content);
    script.appendChild(text);

    // Fire the loading
    head.appendChild(script);
  }

  
  
  render() {
    const style = {
      backgroundColor: this.state.bgColor
    };

    
    


    if (this.state.themeChoose === "热情嘉年华"){
      console.log(this.state.themeChoose);
      let elements = document.getElementsByClassName("page-content");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgba(51, 22, 97, 0.8)";
      }

      let panel = document.getElementsByClassName("chart-panel");
      for (var i = 0; i < panel.length; i++) {
        panel[i].style.backgroundColor="rgba(35, 17, 77, 0.8)";
      }

      let bg = document.getElementsByClassName("bg");
      for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundColor="linear-gradient(to bottom right, #7334d5, #f5436e)";
      }


    }else{
      console.log(this.state.themeChoose);
      let elements = document.getElementsByClassName("page-content");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="rgba(0,0,0,0.5)";
      }

      let panel = document.getElementsByClassName("chart-panel");
      for (var i = 0; i < panel.length; i++) {
        panel[i].style.backgroundColor="rgba(0,0,0,0.5)";
      }
    }
    
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
          <EuiPageContent className="page-content" id="bg">
            <EuiPageContentHeader>
              <EuiTitle>
                {/* 注意：里面一定要放child elements */}
                <h2>{this.state.timeRange[0]} to {this.state.timeRange[1]} User: {this.state.user} | {this.state.themeChoose}</h2>
              </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
              <ul className="font-white theme">{Object.keys(this.state.themeColor).map((item, idx) => <li key={idx} onClick={((e) => this.setThemeColor(e,item))}>{item}</li>)}</ul>
              <EuiSpacer size="l" />
              <div className="font-white time-filter-btn" onClick={(() => (this.setState({showTimeFilter:!this.state.showTimeFilter})))}>Time Filter</div>
              
              <ReactCSSTransitionGroup
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
              transitionName="example"
              className="tf-panel"
              >
                    {this.state.showTimeFilter?  <TimeFilter handleTimeRange={this.handleTimeRange} /> : null}
              </ReactCSSTransitionGroup>

              {/* <div style={style}>test</div> */}

              <EuiSpacer size="l" />

              <EuiFlexGroup>
                <EuiFlexItem grow={2}>
                  <Sankey queryIndex={"winlog*"} range={this.state.timeRange} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose} width={"100%"} />
                </EuiFlexItem>

                <EuiFlexItem grow={1}>
                  <ScatterPlot width={"100%"} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexGroup>
                <EuiFlexItem style={{ maxWidth: 600 }} grow={1}>
                  <Calendar handleUser={this.handleUser} width={"100%"} height={400} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose} />
                </EuiFlexItem>

                <EuiFlexItem grow={1} style={{ maxWidth: 320 }}>
                  <ReportableEvents width={"100%"} height={400} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose} />
                </EuiFlexItem>

                <EuiFlexItem grow={1} style={{ maxWidth: 400 }}>
                  <Radar width={"100%"} height={400} user={this.state.user} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexGroup>
                <EuiFlexItem style={{ maxWidth: 1370 }}>
                  <Scatter3 width={"100%"} height={500} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose} />
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="l" />

              <EuiFlexItem grow={8} style={{ maxWidth: 1370 }}>
                <Parallel handleUser={this.handleUser} user={this.state.user} width={"100%"} height={400} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose}  />
              </EuiFlexItem>

              <EuiSpacer size="l" />

              <EuiFlexItem grow={8} style={{ maxWidth: 1370 } }>
                <Dependencies height={600} themeColor={this.state.themeColor} themeChoose={this.state.themeChoose}  />
              </EuiFlexItem>
              
              <Particles className="bg-animate" />
              

            </EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
      
      
    );
  }
}

 