import React from "react";
import "./Doctors.css";
import banner3 from "../Assets/banner3.jpg";
import doc1 from "../Assets/doc1.jpg";
import doc2 from "../Assets/doc2.jpg";
import doc3 from "../Assets/doc3.jpg";
import doc4 from "../Assets/doc4.jpg";

const Doctors = () => {
  return (
    <div className="doctors-container">
      <div className="doc-banner">
        <img src={banner3} alt="banner3" width={1400} />
      </div>
      <div className="doc-content">
        <h1>Our Doctors</h1>
        <div className="r1">
          <div className="r1-c1">
            <div className="r1-c1-img">
              <img src={doc1} alt="doc1" width={220} height={220} />
            </div>
            <div className="r1-c1-info">
              <p>For your whitish teeth</p>
              <h5 className="card-head">DENTIST</h5>
              <p>
                The dental team includes dental assistants, dental hygienists,
                dental technicians, and sometimes dental therapists.
              </p>
            </div>
          </div>
          <div className="r1-c2">
            <div className="r1-c2-img">
              <img src={doc2} alt="doc" width={220} height={220} />
            </div>
            <div className="r1-c2-info">
              <p>Got a broken heart?</p>
              <h5 className="card-head">CARDIOLOGIST</h5>
              <p>
                the heart and blood vessels — including heart rhythm disorders,
                coronary artery disease, heart attacks, heart defects and
                infections, and related disorders.
              </p>
            </div>
          </div>
          <div className="r1-c3">
            <div className="r1-c3-img">
              <img src={doc3} alt="doc3" width={220} height={220} />
            </div>
            <div className="r1-c3-info">
              <p>Neck or back pain?</p>
              <h5 className="card-head">CHIROPRACTOR</h5>
              <p>
                specializing in diagnosing and treating musculoskeletal issues
                through spinal adjustments.
              </p>
            </div>
          </div>
          <div className="r1-c4">
            <div className="r1-c4-img">
              <img src={doc4} alt="doc4" width={220} height={220} />
            </div>
            <div className="r1-c4-info">
              <p>Only problems?</p>
              <h5 className="card-head">PEDIATRICIAN</h5>
              <p>
                focuses on the health of infants, children, adolescents and
                young adults. Pediatric care starts at birth and lasts through a
                child's 21st birthday or longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
