import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SalesReport from "../pages/SalesReport";
import NotFound from "../pages/NotFound";

export const saleRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/product',
    element: <Product/>
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