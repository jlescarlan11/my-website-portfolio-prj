import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { navigation } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HamburgerMenu } from "./design/Navbar";

// Inside your Navbar component

const Navbar = ({ theme, setTheme }) => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };

  const toggle_mode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b ${
        theme === "dark"
          ? " border-c-2 lg:bg-c-1/90 lg:backdrop-blur-sm"
          : " border-c-2/10 lg:bg-c-4/90 lg:backdrop-blur-sm "
      } ${
        theme === "dark"
          ? openNavigation
            ? "bg-c-1"
            : "bg-c-1/90 backdrop-blur-sm"
          : openNavigation
          ? "bg-c-4"
          : "bg-c-4/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block xl:mr-8 font-extrabold" href="#profile">
          LEST.
        </a>
        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          } fixed top-[3rem] left-0 right-0 bottom-0  ${
            theme === "dark" ? "bg-c-1/90" : "bg-c-4/90"
          } backdrop-blur-sm  lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-2xl uppercase transition-colors hover:text-c-3-1000 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } p-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  theme === "dark"
                    ? item.url === pathname.hash
                      ? "z-2 lg:text-c-4"
                      : "lg:text-c-4/50"
                    : item.url === pathname.hash
                    ? "z-2 lg:text-c-1"
                    : "lg:text-c-1/50"
                } lg:leading-5 ${
                  theme === "dark" ? "lg:hover:text-c-4" : "lg:hover:text-c-1"
                } xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#darkmode"
          className={`hidden w-[1rem] mr-8 ${
            theme === "dark" ? "text-c-4" : "text-c-1"
          } transition colors hover:text-c-3-1000 lg:block`}
          onClick={toggle_mode}
        >
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </a>

        <div className="ml-auto lg:hidden px-[3px]" onClick={toggleNavigation}>
          <FontAwesomeIcon icon={faBars} openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
