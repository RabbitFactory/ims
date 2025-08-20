import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Navigation</h2>
        <nav className="flex flex-col space-y-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/inventory"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            Inventory
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="/suppliers"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            Suppliers
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/location"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-200 ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700"
              }`
            }
          >
            Location
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col space-y-3">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `px-3 py-2 rounded hover:bg-gray-200 ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
        >
          Settings
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `px-3 py-2 rounded hover:bg-gray-200 ${
              isActive ? "bg-blue-500 text-white" : "text-gray-700"
            }`
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
