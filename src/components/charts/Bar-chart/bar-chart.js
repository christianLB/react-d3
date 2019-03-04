import React, { Component, Fragment } from 'react';
import { ResizableBox } from 'react-resizable';
import { LineChart } from 'react-easy-chart';
import * as d3 from 'd3';

import '../../../styles/react-resizable.css';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.style = {
      // width: '1000px',
      // height: '600px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr 1fr',
      gridTemplateAreas: '". . ." ". barChart ." ". . ."',
      backgroundColor: 'blue',
      gridGap: '1px 1px',
      justifyContent: 'stretch',
    }

    this.svgStyle = {
       gridArea: 'barChart',
       backgroundColor: 'red',
       placeSelf: 'stretch',
    }

    // this.resizable = React.createRef();
  }

  render() {
    const { style, svgStyle } = this;
    return (
      <ResizableBox width={1000} height={600}>
        <LineChart data={[
            [
              { x: 1, y: 20 },
              { x: 2, y: 10 },
              { x: 3, y: 25 }
            ]
          ]}
        />
        <svg style={svgStyle}></svg>
      </ResizableBox>
    )
  }
}

export default BarChart;
