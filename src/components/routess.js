import React from 'react';
import Profile from './profiles/profile';
import Mission from './missions/mission';
import Rocket from './rockets/rocket';

const routes = [
  {
    id: 1,
    path: '/profile',
    element: <Profile />,
  },
  {
    id: 2,
    path: '/missions',
    element: <Mission />,
  },
  {
    id: 3,
    path: '/rockets?',
    element: <Rocket />,
  },
];

export default routes;