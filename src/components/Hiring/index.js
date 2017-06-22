import React, { Component } from 'react';
import DropdownButton from './DropdownButton';
import Table from './Table';
import Search from './Search';
import './hiring.css';


class Hiring extends Component {
  render() {
    return (
      <div className='hiringPage'>
        <div className="hiringBar">
          <h4>Filter:</h4>
          <DropdownButton />
          <Search />
        </div>
        <Table />
      </div>
    );
  }
}

export default Hiring;
