import { observable } from 'mobx';

class User {
  id; // id of null means not saved/synced to DB
  @observable firstName;
  @observable lastName;

  constructor(id) {
    this.id = null;
    this.firstName = '';
    this.lastName = '';

    if (id) this.fetchFromDB(id);
  }

  fetchFromDB = async (id) => {
    // await DB call, then
    this.id = id;
  }
}

export default User;
