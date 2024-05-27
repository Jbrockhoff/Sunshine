import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Room from './pages/Room';
import Lessons from './pages/Lessons';
import Documentation from './pages/Documentation';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Signin />
      }, {
        path: '/Room',
        element: <Room />,
        children: [
          {
            path: '/children',
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
        ]
      }, 
    ],
  },
]);

export default routes;

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
);
