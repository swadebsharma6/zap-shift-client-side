import { createBrowserRouter } from "react-router";
import RootLayout from './../layouts/RootLayout';
import Home from './../pages/Home/Home/Home';
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/login";
import Register from "../pages/Authentication/Login/Register";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import PrivetRoute from "../../../../Milestone11/bd-career-code-2025/src/router/PrivetRoute";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {index: true, Component: Home},
      {
        path:'coverage',
        Component: Coverage,
        loader: ()=> fetch('./warehouses.json')
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: '/sendParcel',
        element: <PrivetRoute><SendParcel/></PrivetRoute>
      }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children:[
      {
        path: '/login',
        Component: Login
      },
      {
        path:'register',
        Component: Register
      }
    ]
  }
]);