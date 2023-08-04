import React from 'react';
import Profile from './profiles/profile';
import Mission from './missions/mission';
import Rocket from './rockets/rocket';

const routes = [
  {
    id: 3,
    path: '/',
    element: <Rocket />,
    navigationContent: "Rockets"
  },
  {
    id: 2,
    path: '/missions',
    element: <Mission />,
    navigationContent: "Missions"
  },
  {
    id: 1,
    path: '/profile',
    element: <Profile />,
    navigationContent: "My Profile",
  },
];

export default routes;