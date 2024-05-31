import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Room from "./pages/Room";
import Children from "./pages/Children";
import Lessons from "./pages/Lessons";
import Documentation from "./pages/Documentation";
import Signin from "./pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1> Wrong page </h1>,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "/Children/:id?",
        element: <Children />,
      },
      {
        path: "/Documentation",
        element: <Documentation />,
      },
      {
        path: "/Lessons",
        element: <Lessons />,
      },
      {
        path: "/Room/:id",
        element: <Room />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
