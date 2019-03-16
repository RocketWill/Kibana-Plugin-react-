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
