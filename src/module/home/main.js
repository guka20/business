import React from "react";
import { Card } from "../../components/Card";

export const Main = () => {
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
    </main>
  );
};
