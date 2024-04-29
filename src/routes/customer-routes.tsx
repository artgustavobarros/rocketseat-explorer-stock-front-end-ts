import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import NotFound from "../pages/NotFound";

export const customerRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/product',
    element: <Product/>
  },
  {
    path: '*',
    element: <NotFound/>
  },
])