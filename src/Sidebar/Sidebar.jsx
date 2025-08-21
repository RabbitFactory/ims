import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react'
// import { Menu, X } from "lucide-react"; // icon library (comes with shadcn/ui setup)

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Inventory", path: "/inventory" },
    { name: "Reports", path: "/reports" },
    { name: "Suppliers", path: "/suppliers" },
    { name: "Orders", path: "/orders" },
    { name: "Location", path: "/location" },
    { name: "Settings", path: "/settings" },
    { name: "Login", path: "/login" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 m-2 rounded bg-gray-200 justify-start items-start flex"
      >
        <Hamburger toggled={open} toggle={setOpen} size={20} />
      </button>

      <div
        className={`
                    fixed inset-0 bg-black/50 z-10 md:hidden
                    transition-opacity duration-300
                    ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
                  `}
        onClick={() => setOpen(false)}
      ></div>



      {/* Sidebar */}
      <div
        className={`
          z-20 fixed md:static top-0 left-0 h-full w-64 bg-gray-100 p-6 flex flex-col justify-between
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 md:translate-x-0
        `}
      >
        <h2 className="text-2xl font-bold mb-6">Navigation</h2>

        <nav className="flex flex-col space-y-3 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded hover:bg-gray-200 ${isActive ? "bg-blue-500 text-white" : "text-gray-700"
                }`
              }
              onClick={() => setOpen(false)} // close on mobile after click
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
