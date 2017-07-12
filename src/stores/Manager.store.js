import { observable, action } from 'mobx';
import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

class Manager {
  @observable allemployees;

  constructor(id) {
    this.allemployees = {};
  }

  @action getAllEmployees() {
    axios.get('http://localhost:4000/api/employee/' )
    .then((data) => {
      _.forEach(data.data, (employeedata) =>{
        this.allemployees[employeedata.username] = employeedata;
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

const ManagerStore = new Manager();
export default ManagerStore;
