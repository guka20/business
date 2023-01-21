import React, { useEffect, useState } from "react";
import CareerCard from "../../components/CareerCard";

export const Main = () => {
  const [careerList, setCareerList] = useState([]);
  useEffect(() => {
    setCareerList([
      {
        name: "Web Designer & Developer",
        location: "San Francisco, CA",
        type: "Full Time",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum looking at it layout.",
      },
      {
        name: "Product Development manager",
        location: "San Francisco, CA",
        type: "Full Time",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum looking at it layout.",
      },
      {
        name: "Head of finnance",
        location: "San Francisco, CA",
        type: "Full Time",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum looking at it layout.",
      },
    ]);
  }, []);
  return (
    <div className="main">
      <div className="header">
        <h1>About our company</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
          ullamcorper sed pharetra sene.
        </p>
      </div>
      <div className="team_images">
        <img
          src={require("../../assets/about/team_image2.png")}
          alt="team_image"
        />
        <img
          src={require("../../assets/about/team_image1.jpg")}
          alt="team_image"
        />
      </div>
      <div className="what-we-do">
        <div className="title">
          <h1>What we do</h1>
        </div>
        <div className="description">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using.
          </p>
          <p>
            Content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy.{" "}
          </p>
        </div>
      </div>
      <ul className="counter">
        <li>
          <h1>
            100<b>M</b>
          </h1>
          <span>Client Satisfaction</span>
        </li>
        <li>
          <h1>
            24<b>H</b>
          </h1>
          <span>Expert Support Team</span>
        </li>
        <li>
          <h1>
            98<b>K+</b>
          </h1>
          <span>Sales Count</span>
        </li>
        <li>
          <h1>
            208 <b>+</b>
          </h1>
          <span>Client Worldwide</span>
        </li>
      </ul>
      <div className="mission">
        <div className="texture">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu
            aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida in
            pharetra egestas. Ac id sagittis at morbi interdum nibh diam
            sagittis et.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra id eu
            aliquet diam lorem viverra at justo. Nulla odio nequesg gravida in
            pharetra egestas.
          </p>
        </div>
        <img
          src={require("../../assets/about/phone_image.png")}
          alt="phone_image"
        />
      </div>
      <div className="our-values">
        <div className="title">
          <div className="features">
            <span>Our values</span>
          </div>
          <div className="introduction">
            <h1>The story and values behind our company</h1>
          </div>
        </div>
        <ul className="values">
          <li>
            <img src={require("../../assets/about/image_1.png")} alt="img" />
            <div>
              <h1>Innovation</h1>
              <p>
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </li>
          <li>
            <img src={require("../../assets/about/image_2.png")} alt="img" />
            <div>
              <h1>Team work</h1>
              <p>
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </li>
          <li>
            <img src={require("../../assets/about/image_3.png")} alt="img" />
            <div>
              <h1>Excellence</h1>
              <p>
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </li>
          <li>
            <img src={require("../../assets/about/image_4.png")} alt="img" />
            <div>
              <h1>Responsibility</h1>
              <p>
                Long established fact that a readeed to will be distracted by
                the readable content of a page when looking at its layout
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="career">
        <div className="title">
          <div className="features">
            <span>Career</span>
          </div>
          <div className="introduction">
            <h1>Join our Saasup Let's work together</h1>
          </div>
        </div>
        <div className="careers">
          {careerList &&
            careerList.map((career) => (
              <CareerCard
                header={career.name}
                location={career.location}
                type={career.type}
                description={career.description}
              />
            ))}
        </div>
        <div className="not-found">
          <h1>Can't find the position you are looking for?</h1>
          <p>
            Don't worry, get in touch with us anyways, we are always looking for
            great team members to join us.
          </p>
          <button className="apply">Apply Now</button>
        </div>
      </div>
    </div>
  );
};
