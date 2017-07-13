import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import {observer} from 'mobx-react';
import Chart  from 'react-chartjs';


class PerformanceWrap extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <div>
      <Route exact path={url} component={Performance} />
      <Route path={`${url}/performance`} component={Performance} />
      </div>
    );
  }
}

var opt1c = {
      inGraphDataShow : true,
      animationEasing: "linear",
      annotateDisplay : true,
      spaceBetweenBar : 5,
      graphTitleFontSize: 18
}


var donutData1: {
  datasets: [
    {
      value: 80,
      color:"#F7464A",
      highlight: "#FF5A5E",
      label: "Very Satisfied"
    },
    {
      value: 30,
      color: "#46BFBD",
      highlight: "#5AD3D1",
      label: "Satisfied"
    },
    {
      value: 15,
      color: "#FDB45C",
      highlight: "#FFC870",
      label: "Needs Improvement"
    }
  ],
  labels: [
    'Very Satisfied',
    'Satisfied',
    'Needs Improvement'
  ]
};

class Performance extends Component {
  state = {
    linechartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
      datasets: [{
        label: 'New Hiring',
        data: [12, 2, 2, 1, 5, 4, 8],
        fillColor: "rgba(153,255,51,0.2)"
      },{
        label: 'Terminate',
        data: [-2, -2, 0, -3, -2, 0, 2],
        fillColor: "rgba(0,10,220,0.2)"
      },{
        label: 'Production Needs',
        data: [10, 28, 23, 22, 27, 30, 30],
        fillColor: "rgba(255,153,0,0.2)"
      }]
    },
    linesourceData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
      datasets: [{
        label: 'Talent Network',
        data: [30, 28, 36, 38, 39, 45, 35],
        fillColor: "rgba(153,255,51,0.6)"
      },{
        label: 'Referral',
        data: [5, 9, 6, 8, 9, 5, 5],
        fillColor: "rgba(0,10,220,0.5)"
      },{
        label: 'Internal Career Site',
        data: [12, 19, 14, 15, 17, 9, 15],
        fillColor: "rgba(255,153,0,0.6)"
      },
      {
        label: 'External Job Board',
        data: [40, 47, 46, 43, 49, 54, 52],
        fillColor: "rgba(255,153,0,0.6)"
      }]
    },
    barchartData: {
      labels: ['Production', 'HR', 'SM', 'Accounting', 'CRM', 'SCM'],
      datasets: [{
        label: 'New Hiring',
        data: [3, 0, 0, 1, 2, 2],
        fillColor: "rgba(153,255,51,0.6)"
      },{
        label: 'Terminate',
        data: [1, 0, 0, 0, 0, 1],
        fillColor: "rgba(0,10,220,0.5)"
      },{
        label: 'Production Needs',
        data: [4, 0, 0 , 1, 1, 2],
        fillColor: "rgba(255,153,0,0.6)"
      }]
    },
    radarData: {
      labels: ["Initiation", "Planning", "Execution", "Test", "Monitor" ],
      datasets: [
        {
          label: "New Motor X1",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [95, 90, 20, 5, 20]
        },
        {
          label: "Current Productions",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [100, 95, 80, 80, 100]
        }
      ]
    },
    polarData:[
      {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      },
      {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
      },
      {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
      }
    ],
    donutData1: [
      {
        value: 80,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Very Satisfied"
      },
      {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Satisfied"
      },
      {
        value: 15,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Needs Improvement"
      }
    ],

    donutData2: [
      {
        value: 40,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Very Satisfied"
      },
      {
        value: 60,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Satisfied"
      },
      {
        value: 25,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Needs Improvement"
      }
    ],

    donutData3: [
      {
        value: 55,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Very Satisfied"
      },
      {
        value: 43,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Satisfied"
      },
      {
        value: 35,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Needs Improvement"
      }
    ],
    myoptions: {
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    },
    donutoptions: {
      pieceLabel: {
        mode: 'label',
        arc: true,
        position: 'border'
      }
    }
  };

  componentDidMount() {
    const legend = this.refs.test.getChart().generateLegend();

    this.setState({ legend });
  }

  render(){

    return (
      <div className="container">
        <h2>Welcome to HR Performance Dashboard!</h2>
        <Row>
        <Col sm={4} className="Graph">
          <h3>Employee Engagement </h3>
          <Chart.Doughnut ref="test" data={this.state.donutData1} options={opt1c} width="400" height="250"/>
          <div dangerouslySetInnerHTML={{ __html: this.state.legend }} />
        </Col>
        <Col sm={4} className="Graph">
          <h3>Employee Performance </h3>
          <Chart.Doughnut data={this.state.donutData2} options={this.state.donutoptions} width="400" height="250"/>
        </Col>
        <Col sm={4} className="Graph">
          <h3>Employee Training Progress </h3>
          <Chart.Doughnut data={this.state.donutData3} options={this.state.donutoptions} width="400" height="250"/>
        </Col>
        </Row>
        <Row>
          <Col sm={6} className="Graph">
            <h3>Resource Planning </h3>
            <Chart.Line data={this.state.linechartData} options={opt1c} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <h3>Recruting Dashboard - Resouce Trends </h3>
            <Chart.Line data={this.state.linesourceData} options={opt1c} width="500" height="250" />
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="Graph">
            <h3>Current Month Resource Needs</h3>
            <Chart.Bar data={this.state.barchartData} options={opt1c} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <h3>Project Progress</h3>
            <Chart.Radar data={this.state.radarData} options={opt1c} width="500" height="250"/>
          </Col>
        </Row>

          <Row>
          <Col sm={6} className="Graph">
            <h3>Employee Engagement </h3>
            <Chart.Doughnut data={this.state.donutData1} options={this.state.donutoptions} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <Chart.PolarArea data={this.state.polarData} width="500" height="250"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PerformanceWrap;
