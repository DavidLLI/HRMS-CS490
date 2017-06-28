import { observable, action } from 'mobx';
import axios from 'axios';
import moment from 'moment';
import Cookies from 'universal-cookie';

class User {
  @observable firstName;
  @observable lastName;
  @observable type;

  constructor(id) {
    this.firstName = '';
    this.lastName = '';
    this.type = '';
  }

  @action logIn(username) {
    this.fetchFromDB(username);
  }

  fetchFromDB = async (username) => {
    axios.get('http://localhost:4000/api/employee/username/' + username)
    .then((data) => {
      this.firstName = data.data[0].firstName;
      this.lastName = data.data[0].lastName;
      this.type = data.data[0].type;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

const UserStore = new User();
export default UserStore;
