import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Chart from 'react-chartjs';
import { Row, Col, Nav, NavItem, Table } from 'react-bootstrap';
import './resources.css';
import _ from 'lodash';
import ManagerStore from '@stores/Manager.store';
import { ButtonToolbar, Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class Resources extends Component {

  constructor(props){
    super(props);
    ManagerStore.getAllEmployees();
  }

  state = {
    dynambarData:{
    labels: ["Amount"],
    datasets: [{
      label: "Employees",
       data: [3],
       fillColor: "rgba(0,10,220,0.5)"
     },
     {
       label: "Manager",
       data: [8],
       fillColor: "rgba(255,153,0,0.6)"
     }
    ]
  },
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
        label: 'Projected Needs',
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
    const newdata = this.state.dynambarData;
    let num_manager = 0;
    let num_employee = 0;


    _.forEach(ManagerStore.allemployees, (em, emuser) => {
        if(em.type == "employee"){
          num_employee = num_employee + 1;
        } else {
          num_manager = num_manager + 1;
        }
    });

    newdata.datasets[0].data = [num_employee];
    newdata.datasets[1].data = [num_manager];

    return (
      <div className="container">
      <Row>
      <Col sm={8} className="Graph">
       <ButtonToolbar>
      <ButtonGroup>
          <Link to='/dashboard/performance/edit'>
            <Button bsStyle="primary">Resouce Planning</Button>
          </Link>
          <Link to='/dashboard/performance/edit2'>
            <Button bsStyle="primary">Payroll Analytics</Button>
          </Link>
          <Link to='/dashboard/performance/performanceE2'>
            <Button bsStyle="primary">Performance Tracking</Button>
          </Link>
      </ButtonGroup>
    </ButtonToolbar>
     </Col>
     <Col sm={2} className="Graph">
     <ButtonGroup>
         <Link to='/dashboard/performance'>
           <Button bsStyle="primary">Home Dashboard</Button>
         </Link>
    </ButtonGroup>
     </Col>
    </Row>

       <Row>
         <Col sm={6} className="Graph">
           <h3>Resource Planning </h3>
           <Chart.Line data={this.state.linechartData} width="500" height="250"/>
           <ul>
               <li><span class="mylegend"></span> New Hiring</li>
               <li><span class="mylegend"></span> Terminate</li>
               <li><span class="mylegend"></span> Projected Needs</li>
           </ul>
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
              <LinkContainer to='/dashboard/performance/hiring'>
                <tr>
                  <td>Priority1</td>
                  <td>HR</td>
                  <td>Project Manager</td>
                  <td>1</td>
                </tr>
                </LinkContainer>
                <LinkContainer to='/dashboard/performance/hiring'>
                <tr>
                  <td>Priority2</td>
                  <td>Sales</td>
                  <td>Data Analyst</td>
                  <td>2</td>
                </tr>
                </LinkContainer>
                <LinkContainer to='/dashboard/performance/hiring'>
                <tr>
                  <td>Priority3</td>
                  <td>Production</td>
                  <td>Line Worker</td>
                  <td>2</td>
                </tr>
                </LinkContainer>
              </tbody>
            </Table>
         </Col>
      </Row>
      <Row>
         <Col sm={6} className="Graph">
           <h3>Recruting Dashboard - Resouce Trends </h3>
           <Chart.Line data={this.state.linesourceData} width="500" height="250" />
           <ul>
               <li><span class="mylegend"></span> Talent Network</li>
               <li><span class="mylegend"></span> Referral</li>
               <li><span class="mylegend"></span> Internal Board</li>
               <li><span class="mylegend"></span> External Board</li>
           </ul>
         </Col>
         <Col sm={6} className="Graph">
           <h3>Current Month Resource Needs DYNAM</h3>
           <Chart.Bar data={this.state.dynambarData} width="500" height="250"/>
           <ul>
               <li><span class="mylegend"></span> Manager</li>
               <li><span class="mylegend"></span> Employee</li>
           </ul>
         </Col>
       </Row>
       </div>
    );

  }

}

export default Resources;
