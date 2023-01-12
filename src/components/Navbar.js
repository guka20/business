import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Navbar = () => {
  let { pathname } = window.location;
  return (
    <nav className="navbar">
      <img src={require("../assets/Logo.png")} alt="logo" className="logo" />
      <ul className="links">
        <Link to="/" style={{ color: pathname === "/" ? "white" : "black" }}>
          <li>Home</li>
        </Link>
        <Link
          to="/about"
          style={{ color: pathname === "/" ? "white" : "black" }}
        >
          <li>About</li>
        </Link>
        <Link
          to="/features"
          style={{ color: pathname === "/" ? "white" : "black" }}
        >
          <li>Features</li>
        </Link>
        <li
          className="drop-down"
          style={{ color: pathname === "/" ? "white" : "black" }}
        >
          Pages <AiFillCaretDown />
          <ul className="page-list">
            <Link
              to="/Integrations"
              style={{ color: pathname === "/" ? "#5236ff" : "black" }}
            >
              <li className="list-item">Integrations</li>
            </Link>
            <Link
              to="/Pricing"
              style={{ color: pathname === "/" ? "#5236ff" : "black" }}
            >
              <li className="list-item">Pricing</li>
            </Link>
            <Link
              to="/careers"
              style={{ color: pathname === "/" ? "#5236ff" : "black" }}
            >
              <li className="list-item">Careers</li>
            </Link>
            <Link
              to="/License"
              style={{ color: pathname === "/" ? "#5236ff" : "black" }}
            >
              <li className="list-item">License</li>
            </Link>
          </ul>
        </li>
        <Link
          to="/blog"
          style={{ color: pathname === "/" ? "white" : "black" }}
        >
          <li>Blog</li>
        </Link>
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
