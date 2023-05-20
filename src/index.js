import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap Bundle JS
import CreateResumePage from './container/create-resume/CreateResumePage';
import Root from './container/root/Root';
import NestedStepsTest from './components/form-steps-components/NestedStepsTest';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-resume",
        element: <CreateResumePage />,
      },
      {
        path: "/nested",
        // element: <CreateResumePage />,
        element: <NestedStepsTest />
      },

    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);


