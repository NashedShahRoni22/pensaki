import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
} from "react-icons/md";
import navMenuItems from "../data/navMenuItems";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showChild, setShowChild] = useState("");

  // Function to handle scroll event
  const handleScroll = () => {
    setShowNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-primary px-5 py-3">
      <section className="flex items-center justify-between md:container md:mx-auto">
        {/* Logo here */}
        <Link to={"/"} className="flex items-center gap-3 text-mint">
          {/* <img src={logo} className="h-16" alt="pensaki blackboard" /> */}
          <span className="font-meow-script text-4xl">Pensaki</span>
          <span className="text-accent text-[25px]">Blackboard</span>
        </Link>

        {/* Desktop Navbar Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          {navMenuItems.map((mi, i) => (
            <div key={i}>
              {mi.child ? (
                <div className="group relative">
                  <span className="flex cursor-pointer items-center gap-1">
                    {mi.name}
                    <MdKeyboardArrowDown className="text-xl" />
                  </span>
                  <div className="absolute left-1/2 hidden min-w-44 -translate-x-1/2 flex-col gap-2 rounded bg-white p-5 shadow group-hover:flex">
                    {mi.child.map((mc, i) => (
                      <NavLink
                        to={mc.link}
                        key={i}
                        className={({ isActive }) =>
                          `hover:text-accent flex gap-1.5 capitalize duration-300 ease-linear hover:translate-x-3 ${isActive && "text-accent-dark font-medium"}`
                        }
                      >
                        {mc.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  to={mi.link}
                  key={i}
                  className={({ isActive }) =>
                    `transition-colors duration-200 ease-linear ${
                      isActive
                        ? "text-accent font-medium"
                        : "hover:text-accent text-mint"
                    }`
                  }
                >
                  {mi.name}
                </NavLink>
              )}
            </div>
          ))}
          <Link
            to="https://office.bobosoho.com/login"
            className="bg-accent hover:bg-accent-dark inline-block rounded border border-transparent px-4 py-2 text-white transition-colors duration-200 ease-in-out"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile Navbar Hamburger Button */}
        <button className="lg:hidden" onClick={() => setShowNav(!showNav)}>
          <FaBars className="text-xl text-mint" />
        </button>

        {/* Mobile Dropdown Navbar Links */}
        {showNav && (
          <div className="fixed left-0 top-0 h-full w-full bg-white md:px-14 lg:hidden">
            <div className="flex items-center justify-between bg-primary px-5 py-3">
              <Link to={"/"} className="flex items-center gap-3 text-mint">
                {/* <img src={logo} className="h-16" alt="pensaki blackboard" /> */}
                <span className="font-meow-script text-4xl">Pensaki</span>
                <span className="text-accent text-[25px]">Blackboard</span>
              </Link>
              <button
                className="lg:hidden"
                onClick={() => setShowNav(!showNav)}
              >
                <CgClose className="text-2xl text-mint" />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-4 px-5">
              {navMenuItems.map((mi, i) => (
                <div key={i}>
                  {mi.child ? (
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <p className="text-sm text-primary">{mi.name}</p>
                        {showChild !== i ? (
                          <button
                            onClick={() => setShowChild(i)}
                            className="flex cursor-pointer items-center gap-1"
                          >
                            <MdKeyboardArrowDown className="text-xl" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setShowChild("")}
                            className="flex cursor-pointer items-center gap-1"
                          >
                            <MdKeyboardArrowUp className="text-xl" />
                          </button>
                        )}
                      </div>
                      {showChild === i && (
                        <div className="ml-4 mt-4 flex flex-col gap-4">
                          {mi.child.map((mc, i) => (
                            <NavLink
                              to={mc.link}
                              key={i}
                              onClick={() => setShowNav(!showNav)}
                              className={({ isActive }) =>
                                `flex gap-1.5 text-sm ${isActive ? "text-accent font-medium" : "hover:text-accent text-primary"}`
                              }
                            >
                              <MdKeyboardArrowRight className="text-xl" />
                              {mc.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={mi.link}
                      key={i}
                      onClick={() => setShowNav(!showNav)}
                      className={({ isActive }) =>
                        `text-sm ${isActive ? "text-accent font-medium" : "hover:text-accent text-primary"}`
                      }
                    >
                      {mi.name}
                    </NavLink>
                  )}
                </div>
              ))}
              <Link
                to="https://office.bobosoho.com/login"
                onClick={() => setShowNav(!showNav)}
                className="hover:bg-secondary w-fit rounded border border-transparent bg-primary px-3 py-1 text-white transition-colors duration-200 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
}
