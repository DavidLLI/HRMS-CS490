import { observable, action } from 'mobx';

class Auth {
  @observable isLoggedIn = false;

  @action logIn() {
  	this.isLoggedIn = true;
  }

  @action logOut() {
  	this.isLoggedIn = false;
  }
}

const AuthStore = new Auth();
export default AuthStore;
