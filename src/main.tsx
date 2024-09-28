import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastProvider } from './contexts/ToastContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Home';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ToastProvider>
      <RouterProvider router={router} /> 
      <ToastContainer />
    </ToastProvider>
  </Provider>
);