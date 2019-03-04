import React, { Component } from 'react';
import * as d3 from 'd3';
import BarChart from '../charts/Bar-chart/bar-chart';

export class Locura extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BarChart />
    )
  }
}

export default Locura;
