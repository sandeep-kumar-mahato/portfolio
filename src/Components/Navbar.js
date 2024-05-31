// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiInfo, FiBriefcase, FiMail } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();

  const pages = [
    { path: "/", icon: <FiHome />, label: "Home" },
    { path: "/about", icon: <FiInfo />, label: "About" },
    { path: "/projects", icon: <FiBriefcase />, label: "Projects" },
    { path: "/contact", icon: <FiMail />, label: "Contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <div className="flex">
      {!isHomePage && (
        <nav className="flex flex-col justify-between h-screen bg-gray-800 text-white">
          <img
            className="w-60"
            src="https://images.unsplash.com/photo-1684607776189-24a70a10a804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Background"
          />
          <div className="p-4">
            <ul className="-mt-16 text-center text-2xl">
              {pages.map((page, index) => (
                <li key={index} className="my-7 font-Rye">
                  <Link
                    to={page.path}
                    className={`${
                      location.pathname === page.path ? "text-yellow-500" : ""
                    }`}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-Rye text-gray-400 text-center">© 2023 Sandeep</p>
          </div>
        </nav>
      )}
      {/* Hanging Bar */}
      <nav className="fixed top-1/2 transform -translate-y-1/2 right-4 z-10">
        <div className="flex flex-col space-y-4 items-center bg-gray-800 text-white p-4 rounded-md">
          {pages.map((page, index) => (
            <Link
              key={index}
              to={page.path}
              className={`flex items-center space-x-2 ${
                location.pathname === page.path ? "text-yellow-500" : ""
              }`}
            >
              {page.icon}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
