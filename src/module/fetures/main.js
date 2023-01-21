import React from "react";
import { Card } from "../../components";
export const Main = () => {
  return (
    <main className="main">
      <div className="title">
        <div className="features">
          <span>Analytics</span>
        </div>
        <div className="introduction">
          <h1>Powerful features to advanced user analytics</h1>
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
      <div className="title">
        <div className="features">
          <span>Integration</span>
        </div>
        <div className="introduction">
          <h1>Connect all your tools and work efficiently</h1>
        </div>
      </div>
      <div className="cards">
        <Card
          name="features/integrations"
          title="20+ integrations"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
        <Card
          name="features/allInOne"
          title="All-in-one platform"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
        <Card
          name="features/charts"
          title="Advanced charts"
          text="Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece."
        />
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
    </main>
  );
};
