import { observable } from 'mobx';

class Auth {
  @observable isLoggedIn = true;
}

const AuthInstance = new Auth();
export default AuthInstance;
