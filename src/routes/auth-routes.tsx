import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

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
