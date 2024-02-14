import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Update from "../pages/Update";
import LayoutPublic from "../components/LayoutPublic";
import {deleteData, getData} from '../services/bonsaisServe'
import CardDetail from "../components/CardDetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPublic/>,
      children:[
        {
          path: "/",
     element:  <Home/>,
          loader: getData
        },
        {
      path:"/create",
      element: <Create/>,
      },
      {
      path: "/update",
      element: <Update />,
      },
      {
        path: "/card",
        element: <CardDetail />,
        
      }
    ],
    },
    
  ],
  );
  export  default router;