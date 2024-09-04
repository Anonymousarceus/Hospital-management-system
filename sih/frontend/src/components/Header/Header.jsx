import React, { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import maskImage from '../../assets/images/mask.png';

const navLinks = [
  { path: "/home", display: "Home" },
  { path: "/doctors", display: "Find a Doctor" },
  { path: "/services", display: "Services" },
  { path: "/contact", display: "Contact" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
    style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 150, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${maskImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: "60px",
        height: "120px",
      }}
>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo} alt="Logo" />
          </div>

          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    style={({ isActive }) =>
                      isActive
                        ? {
                            color: "#3490dc",
                            fontSize: "16px",
                            fontWeight: "600",
                          }
                        : {
                            color: "#2d3748",
                            fontSize: "16px",
                            fontWeight: "500",
                          }
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full">
                  <img src={userImg} className="w-full rounded-full" alt="User Avatar" />
                </figure>
              </Link>
            </div>
            <Link to="/login">
              <button
                className="bg-blue-500 py-2 px-6 text-white font-semibold h-[44px] flex items-center justify-center rounded-[50px] hover:bg-blue-600"
              >
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
