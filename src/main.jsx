import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import About from './components/About/About.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
     {
      path:'/',
      loader:() => fetch('serviceCategory.json'),
      element:<Home></Home>
     },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     },
     {
      path:'/about',
      element:<About></About>
     },
     {
      path:'/dashboard',
      element:<Dashboard></Dashboard>
     }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
