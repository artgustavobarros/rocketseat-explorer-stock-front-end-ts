import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Suppliers from "../pages/Suppliers";
import SalesReport from "../pages/SalesReport";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '/suppliers',
    element: <Suppliers/>
  },
  {
    path: '/sales-report',
    element: <SalesReport/>
  },
  {
    path: '*',
    element: <NotFound/>
  },


])

export const authRoutes = createBrowserRouter([
  {
    path: '/',
    element: <SignIn/>
  },
  {
    path: '/register',
    element: <SignUp/>
  }
])
