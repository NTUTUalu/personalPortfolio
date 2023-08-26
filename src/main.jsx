import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/routes/home/navigation";
import Home from './components/routes/home/home.jsx';
import About from './components/routes/about/about'
import Projects from './components/routes/projects/projects'
import Contact from './components/routes/contact/contact'

import ErrorPage from "./components/routes/error-page/error-page";
import "./components/routes/about/about";
// import About from './components/routes/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about/:aboutId",
        element: <About/>,
      },
      {
        path: "projects/:aboutId",
        element: <Projects/>,
      },
      {
        path: "contact/:contactId",
        element: <Contact/>,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
