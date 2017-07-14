import { observable, action } from 'mobx';

class NotificationStore {
  @observable title = '';
  @observable content = '';
  @observable isVisible = false;

  @action
  setTitle = (title) => {
    this.title = title;
  }

  @action
  setContent = (content) => {
    this.content = content;
  }

  @action
  setNotification = (title, content) => {
    this.title = title;
    this.content = content;
  }

  @action
  toggleVisibility = (state = null) => {
    if (state !== true && state !== false) {
      this.isVisible = !this.isVisible;
    } else this.isVisible = state;
  }
}

const instance = new NotificationStore();
export default instance;
