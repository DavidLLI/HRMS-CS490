import { observable, action } from 'mobx';
import axios from 'axios';

class Auth {
  @observable isLoggedIn = false;
  @observable logInFail = false;

  @observable signupError = false;

  @observable username = '';

  @observable activeTab = 'login';

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
