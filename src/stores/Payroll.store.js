import { observable, action } from 'mobx';
import axios from 'axios';
import moment from 'moment';
import AuthStore from '@stores/Auth.store';
import _ from 'lodash';

class Payroll {
  @observable allPayrolls;

  constructor(id) {
    this.allPayrolls = {};
  }

  @action postPayroll(department, startDate, endDate, totalAmount) {
    const obj = {
      request_id: Object.keys(this.allPayrolls).length + 1,
      department: department,
      manager: AuthStore.username,
      timeRequested: moment(),
      startDate: startDate,
      endDate: endDate,
      totalAmount: totalAmount,
      status: 'Requested'
    };
    console.log(obj);
    axios.post('http://localhost:4000/api/payroll', obj)
    .then((data) => {
      this.getAllPayrolls();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  @action getAllPayrolls() {
    axios.get('http://localhost:4000/api/payroll')
    .then((data) => {
      let newPayrolls = {};
      _.forEach(data.data, (payrollData) =>{
        newPayrolls[payrollData.request_id] = payrollData;
      });
      this.allPayrolls = newPayrolls;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

const PayrollStore = new Payroll();
export default PayrollStore;
