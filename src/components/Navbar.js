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
        <li className="drop-down">
          Pages <AiFillCaretDown />
          <ul className="page-list">
            <li className="list-item">page 1</li>
            <li className="list-item">page 2</li>
            <li className="list-item">page 3</li>
          </ul>
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
