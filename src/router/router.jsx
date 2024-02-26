import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Update from "../pages/update/Update";
import LayoutPublic from "../components/LayoutPublic";
<<<<<<< HEAD
import { getData, getBonsaiById } from '../services/bonsaisServe';
=======
import { getData} from '../services/bonsaisServe'

>>>>>>> 3b89bd4d013ef6895cc1248b8ed7818a03c4799e
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
      }
    ],
    },
  ],
  );

  export  default router;