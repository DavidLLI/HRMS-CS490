import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Row, Col, ButtonToolbar, Button, ButtonGroup} from 'react-bootstrap';
import {observer} from 'mobx-react';
import Chart  from 'react-chartjs';
import ManagerStore from '@stores/Manager.store';
import PayrollStore from '@stores/Payroll.store';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Resources from '@components/Resources';
import _ from 'lodash';
import './legend.css';


class PerformanceWrap extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <div>
      <Route exact path={url} component={Performance} />
      <Route path={`${url}/edit`} component={Resources} />
      </div>
    );
  }
}

var options = {
  labelScale: "yes",
}
var ChartLegend = React.createClass({
  propTypes: {
    datasets: React.PropTypes.array.isRequired
  },

  render: function () {
    var datasets = _.map(this.props.datasets, function (ds) {
      return <li><span className="legend-color-box" style={{ backgroundColor: ds.strokeColor }}></span> { ds.label }</li>;
    });

    return (
      <ul className={ this.props.title + "-legend" }>
        { datasets }
      </ul>
    );
  }
});


@observer class Performance extends Component {
static displayName = 'Performance';

  constructor(props){
    super(props);
    ManagerStore.getAllEmployees();
    PayrollStore.getAllPayrolls();
  }


  state = {

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
    },
     salesProgress:{
      labels: ["EmployeeName"],
      datasets: [{
        label: "Performance Score",
         data: [],
         fillColor: "rgba(0,10,220,0.5)"
       }]
    },
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
    donutoptions: {
      pieceLabel: {
        mode: 'label',
        arc: true,
        position: 'border'
      }
    }

  };
  componentDidMount() {
    const legend = this.refs.chart.getChart().generateLegend();
    this.setState({ legend });
  }

  render(){

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

    //for manager: employee bar graph*********
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


    //for sales data for all employees(no managers)
    const salesData = this.state.salesProgress;
    let empName = [];
    let empScore = [];
    

    _.forEach(ManagerStore.allemployees, (em, emuser) => {
        if(em.type == "employee"){
           empName.push(em.firstName +' ' + em.lastName);
           empScore.push(em.performanceScore);
        } else {}
    });

    salesData.labels = empName;
    salesData.datasets[0].data = empScore;

    return (
      <div className="container">
      <ButtonToolbar>
      <ButtonGroup justified>
          <Link to='/dashboard/performance/edit'>
            <Button bsStyle="primary">Resouce Planning</Button>
          </Link>
          <Link to='/dashboard/performance/edit'>
            <Button bsStyle="primary">Whatever else</Button>
          </Link>
          <Link to='/dashboard/performance/edit'>
            <Button bsStyle="primary">Edit2</Button>
          </Link>


     </ButtonGroup>
     </ButtonToolbar>




      <h2>Welcome to HR Performance Dashboard!</h2>
      <Row>
      <Col sm={4} className="Graph">
        <h3>Employee Engagement </h3>
        <Chart.Doughnut ref="test" data={this.state.donutData1} width="400" height="250"/>
        <ul>
            <li><span class="mylegend"></span> Super Awesome</li>
            <li><span class="mylegend"></span> Awesome</li>
            <li><span class="mylegend"></span> Kinda Awesome</li>
            <li><span class="mylegend"></span> Not Awesome</li>
        </ul>
      </Col>
      <Col sm={4} className="Graph">
        <h3> Performance  Evaluations</h3>
        <Chart.Doughnut ref="chart" data={this.state.donutData2} options={this.state.donutoptions} width="400" height="250"/>
        <div dangerouslySetInnerHTML={{ __html: legend }} />
      </Col>
      <Col sm={4} className="Graph">
        <h3> Training Progress </h3>
        <Chart.Doughnut data={this.state.donutData3} options={this.state.donutoptions} width="400" height="250"/>
      </Col>
      </Row>
        <Row>
          <Col sm={6} className="Graph">
            <h3>Current Month Resource Needs DYNAM</h3>
            <Chart.Bar data={this.state.dynambarData} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <h3>Project Progress</h3>
            <Chart.Radar data={this.state.radarData} width="500" height="250"/>
          </Col>
        </Row>

        <Row>
          <Col sm={6} className="Graph">
            <h3>Payroll Progress DYNAM </h3>
              <Chart.Doughnut data={this.state.payrollprogress} options={options} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <h3>Payroll by Department DYNAM </h3>
              <Chart.Bar data={this.state.payrollbydepartment} options={options} width="500" height="250"/>
          </Col>
        </Row>

        <Row>
           <Chart.Bar data={this.state.salesProgress} options={options} width="500" height="250"/>
        </Row>
      </div>
    );
  }
}

export default PerformanceWrap;
