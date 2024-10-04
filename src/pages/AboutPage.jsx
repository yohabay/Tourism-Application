import React from "react";
import { Link } from "react-router-dom";
import jebena from "../images/jebena.jpg";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <section className="hero1">
          <button className="btn-primary">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Back to Home
            </Link>
          </button>
        </section>

        <section className="about-content">
          <p className="para">
            We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage. Our mission
            is to showcase the beauty and diversity of Ethiopia through curated
            tours and personalized services.
          </p>
          <img src={jebena} alt="Jebena" />
        </section>

        <footer>
          <p>&copy; 2017 - yohannis abay</p>
        </footer>
      </div>
    </>
  );
}

export default About;
