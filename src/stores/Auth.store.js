import { observable } from 'mobx';

class Auth {
  @observable isLoggedIn = false;
}

const AuthInstance = new Auth();
export default AuthInstance;
