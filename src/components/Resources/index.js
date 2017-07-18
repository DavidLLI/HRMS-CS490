import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Chart from 'react-chartjs';
import { Row, Col, Nav, NavItem, Table } from 'react-bootstrap';
import './resources.css';

class Resources extends Component {
  state = {
    linechartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
      datasets: [{
        label: 'New Hiring',
        data: [12, 2, 2, 1, 5, 4, 8],
        fillColor: "rgba(0,10,220,0)",
        strokeColor: "rgba(153,255,51,1)",
      },{
        label: 'Terminate',
        data: [-2, -2, 0, -3, -2, 0, 2],
        fillColor: "rgba(0,10,220,0)",
        strokeColor: "rgba(0,10,220,1)",
      },{
        label: 'Production Needs',
        data: [10, 28, 23, 22, 27, 30, 30],
        fillColor: "rgba(255,153,0,0)",
        strokeColor: "rgba(255,153,0,1)",
      }]
    },
    linesourceData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
      datasets: [{
        label: 'Talent Network',
        data: [30, 28, 36, 38, 39, 45, 35],
        fillColor: "rgba(153,255,51,0)",
        strokeColor: "rgba(153,255,51,1)",
      },{
        label: 'Referral',
        data: [5, 9, 6, 8, 9, 5, 5],
        fillColor: "rgba(0,10,220,0)",
        strokeColor: "rgba(0,10,220,1)"
      },{
        label: 'Internal Career Site',
        data: [12, 19, 14, 15, 17, 9, 15],
        fillColor: "rgba(255,153,0,0)",
        strokeColor: "rgba(70,20,0,1)"
      },
      {
        label: 'External Job Board',
        data: [40, 47, 46, 43, 49, 54, 52],
        fillColor: "rgba(255,153,0,0)",
        strokeColor: "rgba(255,153,0,1)"
      }]
    }
  }
  render() {
    return (
      <div className="container">
       <Row>
         <Col sm={6} className="Graph">
           <h3>Resource Planning </h3>
           <Chart.Line data={this.state.linechartData} width="500" height="250"/>
         </Col>
         <Col sm={6} className="Table">
            <h3>Hiring Needed</h3>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Department</th>
                  <th>Position</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Priority1</td>
                  <td>HR</td>
                  <td>Project Manager</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Priority2</td>
                  <td>Sales</td>
                  <td>Data Analyst</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Priority3</td>
                  <td>Production</td>
                  <td>Line Worker</td>
                  <td>2</td>
                </tr>
              </tbody>
            </Table>
         </Col>
      </Row>
      <Row>
         <Col sm={6} className="Graph">
           <h3>Recruting Dashboard - Resouce Trends </h3>
           <Chart.Line data={this.state.linesourceData} width="500" height="250" />
         </Col>
       </Row>
       </div>
    );

  }

}

export default Resources;
