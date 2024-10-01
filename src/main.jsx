import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './layout/Root';
import Statistics from './pages/Statistics';
import Jobs from './pages/Jobs';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
        element: <Jobs />,
        loader: () => fetch('../public/jobs.json'),
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: () => fetch('../public/jobs.json')
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)


/**
 *
 MyComponent.propTypes = {
  optionalArray: PropTypes.array,
  } 
 *
 */