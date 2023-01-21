import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <section className="texture">
          <h1>Build your audience and grow your brand</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
          <button className="start">Get started</button>
          <button className="watch">
            <span>Watch Video</span> <AiFillPlayCircle />
          </button>
        </section>
        <img
          src={require("../../assets/home/mainStatic.png")}
          alt="static"
          width="50%"
        />
      </div>
    </header>
  );
};
