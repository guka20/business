import React, { useState } from "react";
import { Card } from "../../components/Card";

export const Main = () => {
  const [loc, setLocation] = useState({
    first: true,
    second: false,
    third: false,
  });
  const changeLocation = (e) => {
    const { name } = e.target;
    const obj = {
      first: false,
      second: false,
      third: false,
    };
    obj[name] = true;
    setLocation({ ...obj });
  };
  return (
    <main className="main">
      <div className="title">
        <div className="features">
          <span>Features</span>
        </div>
        <div className="introduction">
          <h1>Powerful features to boost your productivity</h1>
        </div>
      </div>
      <div className="cards">
        <Card
          name="cardone"
          title="Secured Platform"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
        <Card
          name="cardtwo"
          title="Advanced Analytics"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
        <Card
          name="cardthree"
          title="Powerful Automation"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
      </div>
      <div className="statistic">
        <div className="texture">
          <h1>Powerful and easy to use saas builder platform</h1>
          <p>
            It is a long established fact that a reader will be by the from
            readable content of a page when looking at its layout. The point of
            using lorem Ipsum.
          </p>
          <div className="costeffective">
            <img
              src={require("../../assets/costefective.png")}
              alt="costefective"
            />
            <div>
              <span>Cost effective</span>
              <p>
                Contrary to popular belief, Lore Ipsum is not simply random
                text.
              </p>
            </div>
          </div>
        </div>
        <img
          src={require("../../assets/mainpagestatic.png")}
          alt="statisticimage"
        />
      </div>
      <div className="title">
        <div className="features">
          <span>How It Work</span>
        </div>
        <div className="introduction">
          <h1>Work smarter with easy access for user..</h1>
        </div>
      </div>
      <div className="account">
        <div className="locations">
          <button
            name="first"
            className={`location-button ${loc.first && "active"}`}
            onClick={changeLocation}
          >
            01. Create account
          </button>
          <button
            name="second"
            className={`location-button ${loc.second && "active"}`}
            onClick={changeLocation}
          >
            02. Install tracking code
          </button>
          <button
            name="third"
            className={`location-button ${loc.third && "active"}`}
            onClick={changeLocation}
          >
            03. Track analytics
          </button>
        </div>
        <div className="component">
          <div className="texture">
            <div className="header">
              <img
                src={require("../../assets/user.png")}
                alt="userLogo"
                width="50px"
              />
              <h1>Create your account & start your work</h1>
            </div>
            <p className="description">
              It is a long established fact that a reader will be distracted by
              the readable content of a page from when looking at it layout. The
              point of using Lorem Ipsum
            </p>
            <button className="get-started">Get Started</button>
          </div>
          <img
            src={require("../../assets/accountimage.png")}
            alt="cardimage"
            className="card-image"
          />
        </div>
      </div>
      <div className="Testimonial">
        <div className="title">
          <div className="features">
            <span>Testimonial</span>
          </div>
          <div className="introduction">
            <h1>Trusted by milions of creators.</h1>
          </div>
          <img
            src={require("../../assets/quote.png")}
            alt="quote"
            width="30px"
            className="quote"
          />
        </div>
        <div className="description">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage.
        </div>
        <div className="user">
          <img src={require("../../assets/userimage.png")} alt="userimage" />
          <h3>James Toriff</h3>
          <p>Developer</p>
          <span>
            <img src={require("../../assets/Star.png")} alt="starsrate" />
          </span>
        </div>
      </div>
    </main>
  );
};
