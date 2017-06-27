import React from 'react';
import { Redirect } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

import Cal from '@components/Cal';
import Hiring from '@components/Hiring';
import Training from '@components/Training';
import Profile from '@components/Profile';
import Announcements from '@components/Announcements';
import Surveys from '@components/Surveys';

const TABS = [
  {
    name: 'Profile',
    path: 'profile',
    component: Profile,
  },
  {
    name: 'Hiring',
    path: 'hiring',
    component: Hiring,
  },
  {
    name: 'Tracking System',
    path: 'tracking',
    component: Cal,
  },
  {
    name: 'Training System',
    path: 'training',
    component: Training,
  },
  {
    name: 'Announcements',
    path: 'announcements',
    component: Announcements,
  },
  {
    name: 'Surveys',
    path: 'surveys',
    component: Surveys,
  },
];

export default TABS;
