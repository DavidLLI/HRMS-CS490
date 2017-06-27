import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/dashboard/hiring">
            <Button className='back'>&larr;</Button>
          </Link>
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
