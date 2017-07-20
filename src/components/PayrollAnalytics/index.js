import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Chart from 'react-chartjs';
import { Row, Col, Nav, NavItem, Table, ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap';
import _ from 'lodash';
import ManagerStore from '@stores/Manager.store';
import { Link } from 'react-router-dom';
import PayrollStore from '@stores/Payroll.store';
import moment from 'moment';
import { LinkContainer } from 'react-router-bootstrap';

var options = {
  labelScale: "yes",
}

class PayrollAnalytics extends Component {

  constructor(props){
    super(props);
    ManagerStore.getAllEmployees();
    PayrollStore.getAllPayrolls();
  }

  state = {
    payrollprogress: [
      {
        value: 80,
        color:"#FDB45C",
        highlight: "#FF5A5E",
        label: "Requested"
      },
      {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Approved"
      },
      {
        value: 15,
        color: "#F7464A",
        highlight: "#FFC870",
        label: "Cancelled"
      }
    ],
    payrollbydepartment: {
      labels: ['Production', 'HR', 'SM', 'Accounting'],
      datasets: [{
        label: 'Requested',
        data: [3, 0, 0, 1 ],
        fillColor: "rgba(153,255,51,0.6)"
      },{
        label: 'Approved',
        data: [1, 0, 0, 0 ],
        fillColor: "rgba(0,10,220,0.5)"
      },{
        label: 'Cancelled',
        data: [4, 0, 0 , 1],
        fillColor: "rgba(255,153,0,0.6)"
      }]
    }
  }

  render() {

        let trArray = [];
        var legend = this.state && this.state.legend || '';

        _.forEach(PayrollStore.allPayrolls, (payroll, id) => {
          const obj = {
              request_id: payroll.request_id,
              department: payroll.department,
              manager: payroll.manager,
              timeRequested: moment(payroll.timeRequested).format('YYYY-MM-DD'),
              startDate: moment(payroll.startDate).format('YYYY-MM-DD'),
              endDate: moment(payroll.endDate).format('YYYY-MM-DD'),
              totalAmount: payroll.totalAmount,
              status: payroll.status
            };
            trArray.push(obj);
        });

        //for payroll request data *************
        const payrollD = this.state.payrollprogress;
        let HRdep = [0,0,0];
        let Productdep = [0,0,0];
        let Salesdep = [0,0,0];
        let Suppiesdep = [0,0,0];
        let CustomerRelationsdep = [0,0,0];
        let Accountdep = [0,0,0];
        let request = 0;
        let approved = 0;
        let cancelled = 0;
        _.forEach(PayrollStore.allPayrolls, (payroll, id) => {
          if(payroll.department == "Production"){
            if(payroll.status == "Requested"){
              Productdep[0]++;
              request++;
            } else if(payroll.status == "Approved"){
              Productdep[1]++;
            } else {
              Productdep[2]++;
            }
          } else if (payroll.department == "HR"){
            if(payroll.status == "Requested"){
              HRdep[0] = HRdep[0] +1;
              request = request + 1 ;
            } else if(payroll.status == "Approved"){
              HRdep[1] = HRdep[1] +1;
              approved = approved +1;
            } else {
              HRdep[2] = HRdep[2] +1;
              cancelled = cancelled +1;
            }
          } else if(payroll.department == "Marketing"){
            if(payroll.status == "Requested"){
              Salesdep[0] =  Salesdep[0] +1;
              request = request + 1 ;
            } else if(payroll.status == "Approved"){
              Salesdep[1] =  Salesdep[1] +1;
              approved = approved +1;
            } else {
              Salesdep[2] =  Salesdep[2] +1;
              cancelled = cancelled +1;
            }
          } else { //finance
            if(payroll.status == "Requested"){
              Accountdep[0] = Accountdep[0] + 1;
              request++;
            } else if(payroll.status == "Approved"){
              Accountdep[1] = Accountdep[1] + 1;
                approved = approved +1;
            } else {
              Accountdep[2] = Accountdep[2] + 1;
              cancelled = cancelled +1;
            }
          }
        });

        payrollD[0].value = request;
        payrollD[1].value = approved;
        payrollD[2].value = cancelled;

        // other Graph: payrollbydepartment
        const payrollDepartment = this.state.payrollbydepartment;
        payrollDepartment.datasets[0].data= [Productdep[0], HRdep[0], Salesdep[0],Accountdep[0]]
        payrollDepartment.datasets[1].data= [Productdep[1], HRdep[1], Salesdep[1],Accountdep[1]]
        payrollDepartment.datasets[2].data= [Productdep[2], HRdep[2], Salesdep[2],Accountdep[2]]



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
          <Link to='/dashboard/performance/edit'>
            <Button bsStyle="primary">Edit2</Button>
          </Link>
      </ButtonGroup>
    </ButtonToolbar>
     </Col>
     <Col sm={2} className="Graph">
     <ButtonGroup>
         <Link to='/dashboard/performance'>
           <Button bsStyle="primary">Back</Button>
         </Link>
    </ButtonGroup>
     </Col>
    </Row>

      <Row>
        <Col sm={5} className="Graph">
          <h3>Payroll Progress DYNAM </h3>
            <Chart.Doughnut data={this.state.payrollprogress} options={options} width="500" height="250"/>
        </Col>
        <Col sm={6} className="Table">
           <h3>Payroll Urgent Requests Needed for Approval</h3>

           <Table striped bordered condensed hover>
             <thead>
               <tr>
                 <th>Priority</th>
                 <th>Department</th>
                 <th>Amount</th>
               </tr>
             </thead>
             <tbody>
             <LinkContainer to='/dashboard/performance/payroll'>
               <tr>
                 <td>Priority1</td>
                 <td>HR</td>
                 <td>Project Manager</td>
               </tr>
               </LinkContainer>
               <LinkContainer to='/dashboard/performance/payroll'>
               <tr>
                 <td>Priority2</td>
                 <td>Sales</td>
                 <td>Data Analyst</td>
               </tr>
               </LinkContainer>
               <LinkContainer to='/dashboard/performance/payroll'>
               <tr>
                 <td>Priority3</td>
                 <td>Production</td>
                 <td>300</td>
               </tr>
               </LinkContainer>
             </tbody>
           </Table>
        </Col>
        </Row>
        <Row>
        <Col sm={6} className="Graph">
          <h3>Payroll by Department DYNAM </h3>
            <Chart.Bar data={this.state.payrollbydepartment} options={options} width="500" height="250"/>
        </Col>
      </Row>
    </div>
    );

  }

}

export default PayrollAnalytics;
