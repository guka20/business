import React, { useState } from "react";
import { Card, PopularCard } from "../../components";

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
          name="home/cardone"
          title="Secured Platform"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
        <Card
          name="home/cardtwo"
          title="Advanced Analytics"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
        <Card
          name="home/cardthree"
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
              src={require("../../assets/home/costefective.png")}
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
          src={require("../../assets/home/mainpagestatic.png")}
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
                src={require("../../assets/home/user.png")}
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
            src={require("../../assets/home/accountimage.png")}
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
          <div className="introduction" style={{ color: "white" }}>
            <h1>Trusted by milions of creators.</h1>
          </div>
          <img
            src={require("../../assets/home/quote.png")}
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
          <img
            src={require("../../assets/home/userimage.png")}
            alt="userimage"
          />
          <h3>James Toriff</h3>
          <p>Developer</p>
          <span>
            <img src={require("../../assets/home/Star.png")} alt="starsrate" />
          </span>
        </div>
      </div>
      <div className="pricing">
        <div className="pricing-details">
          <div className="title">
            <span>Pricing</span>
          </div>
          <h1>Simple and flexible pricing</h1>
          <p>
            It is a long established fact that a reader the will be distracted
            by the readable content of a page from when looking at it layout.{" "}
          </p>
          <h2>Accepted Payment Methods</h2>
          <div className="methods">
            <img src={require("../../assets/home/visa.png")} alt="method" />
            <img
              src={require("../../assets/home/mastercard.png")}
              alt="method"
            />
            <img src={require("../../assets/home/paypal.png")} alt="method" />
            <img src={require("../../assets/home/amazon.png")} alt="method" />
          </div>
        </div>
        <div className="card basic">
          <header className="header">
            <h2>Basic</h2>
            <span>Save 32%</span>
          </header>
          <hr />
          <main>
            <h1>
              $7.99/<small>month</small>
            </h1>
            <div className="bill">Billed as $96 per year</div>
            <hr />
            <ul className="list">
              <li>Unlimited members</li>
              <li>
                <b>Unlimited</b> feedback
              </li>
              <li>Weekly team Feedback Friday</li>
              <li>
                Custom Kudos <b>+9 illustration</b>
              </li>
              <li>Team feedback history</li>
            </ul>
            <hr />
            <button className="get-started">Get Started</button>
          </main>
        </div>
        <div className="card advanced">
          <header className="header">
            <h2>Advanced</h2>
            <span>Popular</span>
          </header>
          <hr />
          <main>
            <h2>
              $10.99/<small>month</small>
            </h2>
            <div className="bill">Billed as $199 per year</div>
            <hr />
            <ul className="list">
              <li>Unlimited members</li>
              <li>
                <b>Unlimited</b> feedback
              </li>
              <li>Weekly team Feedback Friday</li>
              <li>
                Custom Kudos <b>+9 illustration</b>
              </li>
              <li>Team feedback history (30 items)</li>
              <li>Personal feedback history (6 items)</li>
              <li>Stack integration</li>
            </ul>
            <hr />
            <button className="get-started">Get Started</button>
          </main>
        </div>
      </div>
      <div className="newslatter">
        <div className="texture">
          <h1>Start your free trial today</h1>
          <p>
            It is a long established fact that a reader will be by the readable
            when looking at it layout.{" "}
          </p>
          <div className="type-email">
            <input type="email" placeholder="your mail here..." />{" "}
            <button>Get Started</button>
          </div>
        </div>
        <img
          src={require("../../assets/home/departments.png")}
          alt="department"
        />
      </div>
      <div className="title">
        <div className="features">
          <span>Blog</span>
        </div>
        <div className="introduction">
          <h1>Most popular articles</h1>
        </div>
      </div>
      <div className="most-popular">
        <PopularCard
          image="popular-one"
          title="10 Top tips for making your Saas product sticky"
          description="It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum"
        />
        <PopularCard
          image="popular-two"
          title="Automate Reports Generation with Saasup"
          description="It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum"
        />
      </div>
    </main>
  );
};
