import React, { Component } from 'react';
import { ButtonToolbar, Button, Panel } from 'react-bootstrap';
import './hiringPage.css';


const title = (
  <h1>HR Manager</h1>
);

class HiringPage extends Component {
  render() {
    return (
      <div className='hiringDetail'>
        <ButtonToolbar>
          <Button className='back' href="http://localhost:3000/Hiring">&larr;</Button>
          <Button className='contact'>Contact</Button>
          <Button className='apply'>Apply</Button>
        </ButtonToolbar>
        <Panel className='hiringTitle' header={title}></Panel>
        <Panel className='hiringText'>
          Datadatadata
        </Panel>
      </div>
    );
  }
}

export default HiringPage;
