import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import Create from "../pages/create/Create";
import Update from "../pages/update/Update";
import LayoutPublic from "../components/LayoutPublic";

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
  );
};
  export  default router;