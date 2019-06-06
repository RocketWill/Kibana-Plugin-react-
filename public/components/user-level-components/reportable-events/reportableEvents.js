import React, { Component } from "react";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import echarts from "echarts/lib/echarts";
import "echarts";

import { EuiPanel, EuiFlexGrid } from "@elastic/eui";

export default class ReportableEvents extends Component {
  constructor(props) {
    super(props);
    let themeColor = props.themeColor;
    let themeChoose = props.themeChoose;
    this.state = {
      userName: "UserName@HostName",
      events: [
        //[事件名, 狀態(0:正常; 1:異常)]
        ["WINDOWS_FILE:Execute[system].dll", 0],
        ["WINDOWS_FILE:Execute[system].dll", 0],
        ["WINDOWS_FILE:Execute[temp]", 1],
        ["WINDOWS_FILE:Permissions[windows error reporting report queue]", 0]
      ],
      errorEventClass: "",
      errorColor: themeColor[themeChoose][2]
    };
  }

  componentDidMount() {
    let themeColor = this.props.themeColor;
    let themeChoose = this.props.themeChoose;
    this.setState({
      errorColor : themeColor[themeChoose][2]
    });
  }

  componentWillReceiveProps(props){
    let themeColor = props.themeColor;
    let themeChoose = props.themeChoose;
    this.setState({
      errorColor : themeColor[themeChoose][2]
    });
  }

  drawChart(){
    let style = {
      color: this.state.errorColor, 
    };
    return (
      <EuiPanel className="chart-panel">
        <div
          id="reportable-event"
          style={style}
        >
          <h2 className="title font-white">{this.state.userName}</h2>
          {this.state.events.map((event, index) => {
            if (event[1] === 1) {
              return <p className="event" style={style}>{event[0]}</p>;
            } else {
              return <p className="font-white event">{event[0]}</p>;
            }
          })}
        </div>
      </EuiPanel>
    )
  }

  render() {
    let reportableEvents = this.drawChart();
    return(
      reportableEvents
    );
  }
}
