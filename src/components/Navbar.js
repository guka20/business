import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
export const Navbar = () => {
  let { pathname } = window.location;
  return (
    <nav
      className="navbar"
      style={{ color: pathname === "/" ? "white" : "black" }}
    >
      <img src={require("../assets/Logo.png")} alt="logo" className="logo" />
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Features</li>
        <li>
          Pages <AiFillCaretDown />
        </li>
        <li>Blog</li>
      </ul>
      <button
        className="sign-in"
        style={
          pathname === "/"
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "#5236ff", color: "white" }
        }
      >
        Sign In
      </button>
    </nav>
  );
};
