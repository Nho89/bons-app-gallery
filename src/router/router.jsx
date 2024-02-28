 import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Update from "../pages/update/Update";
import LayoutPublic from "../components/LayoutPublic";
import { getData} from '../services/bonsaisServe'
import Details from "../pages/details/Details";

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
      },
      {
        path: "/details",
        element: <Details/>,
      }
    ],
    },
  ],
  );
  export  default router;