// Import necessary dependencies
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your components
import Navbar from './components/routes/home/navigation';
import Home from './components/routes/home/home';
import About from './components/routes/about/about';
import Projects from './components/routes/projects/projects';
import Contact from './components/routes/contact/contact';
import ErrorPage from './components/routes/error-page/error-page';

// Initialize Google Analytics
ReactGA.initialize('YOUR_TRACKING_ID');

// Create your router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about/:aboutId', element: <About /> },
      { path: 'projects/:projectsId', element: <Projects /> },
      { path: 'contact/:contactId', element: <Contact /> },
    ],
  },
]);

// Render the App component with Google Analytics tracking
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Track pageviews for all routes
ReactGA.pageview(window.location.pathname + window.location.search);
