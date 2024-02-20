import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Update from "../pages/update/Update";
import LayoutPublic from "../components/LayoutPublic";

<<<<<<< HEAD
const router = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LayoutPublic />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Route>
      </Routes>
    </Router>
=======
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
      }
    ],
    },
  ],
>>>>>>> 32fc9fa53dda2b0379d702ecdc94827441e5b79c
  );
};
  export  default router;