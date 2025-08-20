import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Inventory from "./Pages/Inventory";
import Reports from "./Pages/Reports";
import Suppliers from "./Pages/Suppliers";
import Orders from "./Pages/Orders";
import Settings from "./Pages/Settings";
import Location from "./Pages/Location";

function RoutesApp() {
  return (
    <Routes>
      {/* Public route (no layout) */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes (with layout) */}
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="reports" element={<Reports />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="location" element={<Location />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesApp;
