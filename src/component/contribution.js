
import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
      },
      series: [
        {
          name: "Mon",
          data: [30, 40, 6, 50, 49, 60, 70, 91, 22, 55, 2, 45],
        },
        {
          name: "Tues",
          data: [3, 40, 95, 50, 49, 60, 7, 91, 11, 45, 91, 0],
        },
        {
          name: "Wed",
          data: [30, 40, 45, 50, 49, 6, 70, 91, 11, 45, 1, 90],
        },
        {
          name: "Thur",
          data: [90, 40, 45, 50, 99, 60, 70, 9, 2, 5, 12, 8],
        },
        {
          name: "Fri",
          data: [30, 4, 45, 90, 49, 60, 70, 9, 1, 25, 66, 99],
        },
        {
          name: "Sat",
          data: [90, 40, 45, 50, 49, 6, 70, 91, 54, 45, 45, 4],
        },
        {
          name: "Sun",
          data: [30, 4, 45, 50, 94, 60, 7, 91, 4, 5, 12, 8],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="heatmap"
              width="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
