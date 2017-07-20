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
import PayrollAnalytics from '@components/PayrollAnalytics';
import Hiring from '@components/Hiring';
import _ from 'lodash';
import './legend.css';
import payrollPage from '@components/Payroll';
import PerformanceE2 from '@components/PerformanceE2';

class PerformanceWrap extends Component {
  render() {
    const url = this.props.match.url;
    return (
      <div>
      <Route exact path={url} component={Performance} />
      <Route path={`${url}/edit`} component={Resources} />
      <Route path={`${url}/edit2`} component={PayrollAnalytics} />
      <Route path={`${url}/hiring`} component={Hiring} />
      <Route path={`${url}/payroll`} component={payrollPage} />
      <Route path={`${url}/performanceE2`} component={PerformanceE2} />

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
     salesProgress:{
      labels: ["Name"],
      datasets: [{
        labels: ["EmpolyeeName"],
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
    </Row>

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
<<<<<<< HEAD
        <Row>
          <Col sm={6} className="Graph">
            <h3>Resource Planning </h3>
            <Chart.Line data={this.state.linechartData} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <h3>Recruting Dashboard - Resouce Trends </h3>
            <Chart.Line data={this.state.linesourceData} width="500" height="250" />
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
          <h3>Sales Performance DYNAM</h3>
           <Chart.Bar data={this.state.salesProgress} options={options} width="500" height="250"/>
        </Row>
=======
>>>>>>> 4f7f0f3cb6612e390ab2ead9912b6064e6ee9113
      </div>
    );
  }
}

export default PerformanceWrap;
