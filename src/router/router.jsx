import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Update from "../pages/Update";
import LayoutPublic from "../components/LayoutPublic";
import Card from "../components/Card";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic/>,
      children:[
        {
          path: "/",
     element:  <Home/>,
        },
        {
      path:"/create",
      element: <Create/>,
      },
      {
      path: "/update",
      element: <Update />,
      },
    ],
    },
    
  ],
  );
  export  default router;