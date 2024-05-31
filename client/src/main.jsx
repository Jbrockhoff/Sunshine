import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import App from './App.jsx';
import Room from './pages/Room';
<<<<<<< HEAD
import Children from './pages/Children';
import Documentation from './pages/Documentation';
import Lessons from './pages/Lessons';
=======
import Children from './pages/Children'
import Lessons from './pages/Lessons';
import Documentation from './pages/Documentation';
import Signin from './pages/Signin';
>>>>>>> 80c66936605e6da110930962c25aedc991802ad0

const routes = [
  {
    path: '/',
    element: <App />,
<<<<<<< HEAD
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
=======
    errorElement: <h1> Wrong page </h1>,
    children: [
      {
        index: true,
        element: <Signin />,
      },
        {
          path: '/Children/:id?',
          element: <Children />
        },
        {
          path: '/Documentation',
          element: <Documentation />
        },
        {
          path: '/Lessons',
          element: <Lessons />
        }
     , {
        path: '/Room/:id',
        element: <Room />,
>>>>>>> 80c66936605e6da110930962c25aedc991802ad0
      }, 
    ],
  },
];

<<<<<<< HEAD
function Routes() {
  return useRoutes(routes);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes />
  </Router>
);
//little changes in the code
=======
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
>>>>>>> 80c66936605e6da110930962c25aedc991802ad0
