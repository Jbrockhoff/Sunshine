import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Room from './pages/Room';
import Children from './pages/Children'
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
        path: '/room',
        element: <Room />
        children: 
      }, {
        path: '/room/:id',
        element: </>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
