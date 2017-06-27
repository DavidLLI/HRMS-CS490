import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table } from 'react-bootstrap';

class HiringTable extends Component {
  render() {
    const trArray = [
      {
        title: 'HR Manager',
        decription:'need experenced manager',
        manager: 'Otto',
        timePosted: '04/15/2017'
      },
      {
        title: 'Engineer',
        decription:'An engineer with more than 3 years experience',
        manager: 'BBck',
        timePosted: '04/13/2017'
      },
      {
        title: 'Sales',
        decription:'Selling product',
        manager: 'Kkkb',
        timePosted: '03/11/2017'
      },
    ];

    return (
      <Table bordered bsClass="hiringTable">
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Manager</th>
        <th>Time Posted</th>
      </tr>
    </thead>
    <tbody>
      {trArray.map(row => {
        return (
          <LinkContainer to='/dashboard/hiring/details'>
            <tr>
              <td>{row.title}</td>
              <td>{row.decription}</td>
              <td>{row.manager}</td>
              <td>{row.timePosted}</td>
            </tr>
          </LinkContainer>
        );
      })}
    </tbody>
  </Table>
    );
  }
}

export default HiringTable;
