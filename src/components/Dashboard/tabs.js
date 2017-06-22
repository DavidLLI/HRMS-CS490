import React from 'react';
import { Redirect } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import Cal from '@components/Cal';

const ph = (name) => {
  return ( () => <PageHeader>{name}</PageHeader> );
};

const TABS = [
  {
    name: 'Profile',
    path: 'profile',
    component: ph('Profile'),
  },
  {
    name: 'Hiring',
    path: 'hiring',
    component: ph('Hiring'),
  },
  {
    name: 'Tracking System',
    path: 'tracking',
    component: Cal,
  },
  {
    name: 'Training System',
    path: 'training',
    component: ph('Training'),
  },
  {
    name: 'Announcements',
    path: 'announcements',
    component: ph('Announcements'),
  },
  {
    name: 'Surveys',
    path: 'surveys',
    component: ph('Surveys'),
  },
];

export default TABS;
