import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Create from "../components/Create";
import Nav from "../components/Nav";
import Update from "../components/Update";
import Footer from "../components/Footer";

const router = createBrowserRouter([
    {
      path: "/",
     element:  <Home/>,
      
    },
    {
      path: "/nav",
      element: <Nav/>
    },
    {
      path:"/create",
      element: <Create/>
    },
    {
      path: "/update",
      element: <Update />
    },
    {
      path: "/footer",
      element: <Footer />
    }

  ]);
  export  default router;