import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { Login, Signup } from "../components";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        // {
        //     path: "/",
        //     element: <Home/>
        // },
      ]
    },
    {
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);

  export default router;