import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Row, Col, Nav, NavItem } from 'react-bootstrap';
import {observer} from 'mobx-react';
import Chart  from 'react-chartjs';
import ManagerStore from '@stores/Manager.store';
import PayrollStore from '@stores/Payroll.store';
import moment from 'moment';
import { Table, Modal } from 'react-bootstrap';
import _ from 'lodash';
import {LineChart, Pie, Sector, PieChart, Line, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend } from 'recharts';

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
const linedata = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const DonutChart1 = [{name: 'Approved', value: 10},
{name: 'Requested', value: 8},
{name: 'Cancelled', value: 2}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomizedLabel = React.createClass({
  render () {
    const {x, y, stroke, value} = this.props;

    return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>
  }
});
const CustomizedAxisTick = React.createClass({
  render () {
    const {x, y, stroke, payload} = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
      </g>
    );
  }
});

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
      />
      <Sector
      cx={cx}
      cy={cy}
      startAngle={startAngle}
      endAngle={endAngle}
      innerRadius={outerRadius + 6}
      outerRadius={outerRadius + 10}
      fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
      {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
      </g>
    );
  };

  var opt1c = {
    inGraphDataShow : true,
    animationEasing: "linear",
    annotateDisplay : true,
    spaceBetweenBar : 5,
    graphTitleFontSize: 18
  }

var options = {
  labelScale: "yes",
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

@observer class Performance extends Component {

  constructor(props){
    super(props);
    ManagerStore.getAllEmployees();
    PayrollStore.getAllPayrolls();
  }


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

  getInitialState() {
      return {
        activeIndex: 0,
      };
  }

  renderLabel(props) {
      return <text x={props.x} y={props.y}>{props.value}</text>;
  }
  render(){
    let trArray = [];

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
    let request = 0;
    let approved  = 0;
    let cancelled =0;
    _.forEach(PayrollStore.allPayrolls, (payroll, id) => {
      if(payroll.status == "Requested"){
        request = request + 1;
      } else if(payroll.status == "Approved"){
        approved = approved + 1;
      } else {
        cancelled = cancelled +1;
      }
    });

    payrollD[0].value = request;
    payrollD[1].value = approved;
    payrollD[2].value = cancelled;

    //

    return (
      <div className="container">
      <LineChart width={600} height={300} data={linedata}
            margin={{top: 20, right: 30, left: 20, bottom: 10}}>
       <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick/>}/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      <PieChart width={800} height={400} >
           <Pie
             label={this.renderLabel}
             activeIndex={this.state.activeIndex}
             data={DonutChart1}
             cx={300}
             cy={200}
             innerRadius={60}
             outerRadius={80}
             fill="#8884d8" />

        </PieChart>


        <h2>Welcome to HR Performance Dashboard!</h2>
        <h2>manager: {num_manager}</h2>
        <h2>employee: {num_employee}</h2>
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
            <Chart.Bar data={this.state.dynambarData} options={opt1c} width="500" height="250"/>
          </Col>
          <Col sm={6} className="Graph">
            <h3>Project Progress</h3>
            <Chart.Radar data={this.state.radarData} options={opt1c} width="500" height="250"/>
          </Col>
        </Row>

          <Row>
          <Col sm={6} className="Graph">
            <h3>Payroll Progress </h3>
              <Chart.Doughnut data={this.state.payrollprogress} options={options} width="500" height="250"/>
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
