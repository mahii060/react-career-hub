import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import PropTypes from 'prop-types';
import Root from './layout/Root';
import Statistics from './pages/Statistics';
import Jobs from './pages/Jobs';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics />
      },
      {
        path: '/jobs',
        element: <Jobs />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


/**
 *
 MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  } 
 *
 */