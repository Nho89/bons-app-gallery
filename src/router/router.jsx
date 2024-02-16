import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Update from "../pages/update/Update";
import LayoutPublic from "../components/LayoutPublic";
import {deleteData, getData, updateData} from '../services/bonsaisServe'
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
      path: "/update/:id",
      element: <Update />,
       //loader: updateData
      }/* ,
      {
        path: "/card",
        element: <CardDetail />,
        
      } */
    ],
    },
  ],
  );
  export  default router;