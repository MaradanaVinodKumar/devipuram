"use client";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../../context/authContext";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Devipuram", path: "/Devipuram" },
    { name: "Guruji", path: "/Guruji" },
    { name: "Pujas & Homas", path: "/PoojasAndHomas" },
    { name: "Learn Sri Vidya", path: "/learn-sri-vidya" },
    { name: "Events", path: "/events" },
  ];

  useEffect(() => {
    // Highlight "Home" on refresh or reload, even if on a different page
    if (location.pathname === "/") {
      setActiveLink("Home");
    } else {
      // Find if the current path matches any of the nav links
      const matched = navLinks.find((link) => link.path === location.pathname);
      if (matched) {
        setActiveLink(matched.name); // Highlight the matched link
      } else {
        setActiveLink("Home"); // Default to "Home" if no match
      }
    }
  }, [location.pathname]);

  const handleNavClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  const handleSignInClick = () => {
    setShowDropdown(false);
    setMenuOpen(false);
    navigate("/AuthPage");
  };

  const handleUserIconClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleSignOut = () => {
    logout();
    setShowDropdown(false);
    setActiveLink("Home");
    navigate("/");
  };

  return (
    <nav className="bg-white z-50 w-full border-b shadow-sm fixed top-0 left-0">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 h-[70px] sm:h-[80px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/02bf1aee230d4486839f634d56a31376a79ea3b9?placeholderIfAbsent=true"
          alt="Logo"
          className="object-contain w-[100px] sm:w-[130px] md:w-[160px] lg:w-[190px] h-auto"
        />

        <div className="block xl:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } xl:flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-6 md:gap-8 text-sm sm:text-base md:text-lg lg:text-xl absolute xl:static top-[70px] xl:top-auto right-4 sm:right-6 md:right-12 lg:right-20 w-auto xl:w-auto bg-white xl:bg-transparent px-4 py-4 xl:p-0 shadow-md xl:shadow-none transition-all duration-300 ease-in-out`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.name)}
              className={`relative px-2 xl:px-3 py-1 rounded-md transition-all duration-300 ease-in-out ${
                activeLink === link.name
                  ? "bg-green-500 text-white"
                  : "text-black hover:bg-green-100"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="relative flex items-center cursor-pointer">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/ccf25594126c8423a424958e023d5b8f868018d0?placeholderIfAbsent=true"
              alt="User"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
              onClick={isAuthenticated ? handleUserIconClick : handleSignInClick}
            />

            {!isAuthenticated && (
              <span
                onClick={handleSignInClick}
                className="ml-2 text-xs sm:text-sm md:text-base lg:text-lg hover:text-green-600"
              >
                Sign In
              </span>
            )}

            {isAuthenticated && showDropdown && (
              <div
                onClick={handleSignOut}
                className="absolute top-8 right-0 bg-white border shadow-md rounded-md px-4 py-2 text-sm hover:bg-red-100 z-50"
              >
                Sign Out
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
