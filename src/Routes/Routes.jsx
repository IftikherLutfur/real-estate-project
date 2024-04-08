import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Components/Root/Root";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;