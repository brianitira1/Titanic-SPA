import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";
import AdminDashboardPage from "./components/AdminDashBoardPage";
import ServicesPage from "./components/ServicesPage";

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
};

export default app;
