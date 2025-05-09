"use client";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Devipuram", path: "/Devipuram" },
    { name: "Guruji", path: "/Guruji" },
    { name: "Pujas & Homas", path: "/PoojasAndHomas" },
    { name: "Learn Sri Vidya", path: "/learn-sri-vidya" },
    { name: "Events", path: "/events" },
  ];

  useEffect(() => {
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }
    setActiveLink("Home");
  }, []);

  const handleNavClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

  const handleSignInClick = () => {
    setActiveLink("Sign In");
    setMenuOpen(false);
    navigate("/AuthPage", { replace: true });
  };

  return (
    <nav className="bg-white z-50 w-full border-b shadow-sm fixed top-0 left-0">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 h-[70px] sm:h-[80px]">
        {/* Logo */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/02bf1aee230d4486839f634d56a31376a79ea3b9?placeholderIfAbsent=true"
          alt="Logo"
          className="object-contain w-[100px] sm:w-[130px] md:w-[160px] lg:w-[190px] h-auto"
        />

        {/* Hamburger Icon for <= 1298px */}
        <div className="block xl:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
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

          {/* Sign In Button */}
          <button
            onClick={handleSignInClick}
            className={`flex gap-2 items-center transition duration-200 ${
              activeLink === "Sign In"
                ? "text-green-600"
                : "text-black hover:text-green-600"
            }`}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/ccf25594126c8423a424958e023d5b8f868018d0?placeholderIfAbsent=true"
              alt="Sign In"
              className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6"
            />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg">
              Sign In
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};
