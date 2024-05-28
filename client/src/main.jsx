import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import App from './App.jsx';
import Room from './pages/Room';
import Children from './pages/Children';
import Documentation from './pages/Documentation';
import Lessons from './pages/Lessons';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'room',
        element: <Room />,
        children: [
          {
            path: 'children',
            element: <Children />
          },
          {
            path: 'documentation',
            element: <Documentation />
          },
          {
            path: 'lessons',
            element: <Lessons />
          }
        ]
      }, 
    ],
  },
];

function Routes() {
  return useRoutes(routes);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes />
  </Router>
);
//little changes in the code