import { observable, action } from 'mobx';
import axios from 'axios';
import UserStore from '@stores/User.store';
import Cookies from 'universal-cookie';

class Auth {
  @observable isLoggedIn = false;
  @observable logInFail = false;

  @observable signupError = false;

  @observable username = '';

  @observable activeTab = 'login';

  constructor() {
    this.cookies = new Cookies();
  }

  @action updateLoggedIn() {
    this.username = this.cookies.get('hr_username');
    if (this.username) {
      this.isLoggedIn = true;
    }
    console.log(this.username);
    return this.isLoggedIn;
  }

  @action setTab(activeTab) {
  	this.activeTab = activeTab;
  }

  @action signUp(username, password) {
  	axios.post('http://localhost:4000/api/employee/signup', {
  			username: username,
  			password: password
  		})
  		.then(() => {
  			this.setTab('login');
  			this.signupError = false;
  		})
  		.catch((error) => {
  			this.signupError = error.response.data.message;
  		});
  }

  @action logIn(username, password) {
  	axios.get('http://localhost:4000/api/employee/username/' + username + '/password/' + password)
  		.then((data) => {
  			if (data.status === 200) {
  				this.username = username;
  				this.isLoggedIn = true;
          UserStore.logIn(username);
          let d = new Date();
          d.setTime(d.getTime() + 60 * 1000 * 60); // expire in 5 mins
          this.cookies.set('hr_username', username, { path: '/', expires: d });
  			}
  		})
  		.catch((error) => {
  			this.logInFail= true;
  			console.log(error);
  		});
  }

  @action logOut() {
  	this.isLoggedIn = false;
  }
}

const AuthStore = new Auth();
export default AuthStore;
