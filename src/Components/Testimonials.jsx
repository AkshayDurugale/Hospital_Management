import React from "react";
import "./Testimonials.css";
import banner from "../Assets/banner.jpg";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="test-banner">
        <img src={banner} alt="banner" width={1400} />
      </div>
      <div className="test-content">
        <h4>What our patients says..</h4>
        <h1>THE WORD OF MOUTH</h1>
        <div className="test-cards">
          <div className="tc-1">
            <h3>Anjala</h3>
            <h6>Date: August,2024</h6>
            <p>
              My first visit to this hospital was very good. Admin staff is very
              cooperative.
            </p>
          </div>
          <div className="tc-2">
            <h3>Lalitha Sravanthi</h3>
            <h6>Date: May, 2024</h6>
            <p>
              I have my child treatment from pediatric doctor. Experience was
              very good.
            </p>
          </div>
          <div className="tc-3">
            <h3>Ravindra Kumar</h3>
            <h6>Date: March,2024</h6>
            <p>
              Triton hospital has very professional doctors and staff, excellent
              facilities and patient friendly.We had caesarean delivery there
              and are fully satisfied.5 stars to this hospital.
            </p>
          </div>
          <div className="tc-4">
            <h3>Abhishek Jain</h3>
            <h6>Date: January,2024</h6>
            <p>
              My experience so far is really good. Experienced and professional
              staff. Situated at main road so the transportation connectivity is
              also very good.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
