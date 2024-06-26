// //import React from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/T-orange.png";
//import axios from "axios";

const Menu = () => {
  return (
    <div className=" d-flex flex-column flex-md-row">
      <NavLink
        className="px-3 text-decoration-none hover:bg-white"
        to={"/"}
        style={({ isActive }) =>
          isActive ? { color: "#ff9700" } : { color: "#0c7616" }
        }
      >
        Home
      </NavLink>
      <NavLink
        className="px-3 text-decoration-none hover:bg-white"
        to={"/signup"}
        style={({ isActive }) =>
          isActive ? { color: "#ff9700" } : { color: "#0c7616" }
        }
      >
        Get started
      </NavLink>
      <NavLink
        className="px-3 text-decoration-none hover:bg-white"
        to={"/login"}
        style={({ isActive }) =>
          isActive ? { color: "#ff9700" } : { color: "#0c7616" }
        }
      >
        Login
      </NavLink>
      <NavLink
        className="px-3 text-decoration-none hover:bg-white"
        to={"/course"}
        style={({ isActive }) =>
          isActive ? { color: "#ff9700" } : { color: "#0c7616" }
        }
      >
        Courses
      </NavLink>
      <NavLink
        className="px-3 text-decoration-none hover:bg-white"
        to={"/about"}
        style={({ isActive }) =>
          isActive ? { color: "#ff9700" } : { color: "#0c7616" }
        }
      >
        About us
      </NavLink>
      <NavLink
        className="px-3 text-decoration-none hover:bg-white"
        to={"/faqs"}
        style={({ isActive }) =>
          isActive ? { color: "#ff9700" } : { color: "#0c7616" }
        }
      >
        FAQs
      </NavLink>
    </div>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const avatar = sessionStorage.getItem("avatar");
    setUserPhotoUrl(avatar);
  }, []);

  return (
    <>
      <div className=" bg-emerald-200">
        <button
          className="px-4 pt-3 "
          type="button"
          onClick={() => setShow((prev) => !prev)}
        >
          <span className="md:hidden">
            <FaBars />
          </span>
          {show && <Menu />}
        </button>
      </div>

      <div className="flex justify-between items-center px-4 md:py-2 bg-emerald-200">
        <div className="flex">
          <div className="w-10 ">
            <img src={logo} alt="lady" />
          </div>
          <div className="m-0 p-0 my-4 font-bold">
            <span className="text-amber-500">Tech</span>
            <span className="text-emerald-600">Girls</span>
          </div>
        </div>

        <div className="lg-menu">
          <Menu />
        </div>

        {/* added */}
        <div className="flex justify-between gap-3">
          <div className="inset-y-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-emerald-600 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500"
            >
              {/* <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span> */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
          </div>
          <div className="relative">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500"
                id="user-menu-button"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={
                    userPhotoUrl
                      ? userPhotoUrl
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  }
                  alt="User Photo"
                />
              </button>
            </div>

            {menuOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-emerald-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <NavLink
                  to={"/profile"}
                  className="block px-4 py-2 text-white hover:bg-emerald-400 font-bold  rounded"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </NavLink>
                <NavLink
                  to={"/dashboard"}
                  className="block px-4 py-2 text-white hover:bg-emerald-400 font-bold  rounded"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  my learning
                </NavLink>
                <NavLink
                  to={"/settings"}
                  className="block px-4 py-2 text-white hover:bg-emerald-400 font-bold  rounded"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </NavLink>
                {/* <NavLink
                  to={"/logout"}
                  className="block px-4 py-2 text-sm text-white"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </NavLink> */}
                <button
                  className="block hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => {
                    sessionStorage.removeItem("fullname");
                    navigate("/login");
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
