import React from "react";
import "./Services.css";

import serv1 from "../Assets/serv1.jpg";
import serv2 from "../Assets/serv2.jpg";
import serv3 from "../Assets/serv3.jpg";
import serv4 from "../Assets/serv4.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <div className="services-main">
          <div className="r1">
            <div className="r1-c1">
              <div className="r1-c1-img">
                <img src={serv1} alt="serv1" width={220} height={220} />
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
                <img src={serv2} alt="serv2" width={220} height={220} />
              </div>
              <div className="r1-c2-info">
                <p>Got a broken heart?</p>
                <h5 className="card-head">CARDIOLOGIST</h5>
                <p>
                  the heart and blood vessels — including heart rhythm
                  disorders, coronary artery disease, heart attacks, heart
                  defects and infections, and related disorders.
                </p>
              </div>
            </div>
            <div className="r1-c3">
              <div className="r1-c3-img">
                <img src={serv3} alt="serv3" width={220} height={220} />
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
                <img src={serv4} alt="serv4" width={220} height={220} />
              </div>
              <div className="r1-c4-info">
                {" "}
                <p>Only problems?</p>
                <h5 className="card-head">PEDIATRICIAN</h5>
                <p>
                  focuses on the health of infants, children, adolescents and
                  young adults. Pediatric care starts at birth and lasts through
                  a child's 21st birthday or longer.
                </p>
              </div>
            </div>
          </div>
          <div className="r2">
            <div className="r1-c1">
              <div className="r1-c1-img">
                <img src={serv1} alt="serv1" width={220} height={220} />
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
                <img src={serv2} alt="serv2" width={220} height={220} />
              </div>
              <div className="r1-c2-info">
                {" "}
                <p>Got a broken heart?</p>
                <h5 className="card-head">CARDIOLOGIST</h5>
                <p>
                  the heart and blood vessels — including heart rhythm
                  disorders, coronary artery disease, heart attacks, heart
                  defects and infections, and related disorders.
                </p>
              </div>
            </div>
            <div className="r1-c3">
              <div className="r1-c3-img">
                <img src={serv3} alt="serv3" width={220} height={220} />
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
                {" "}
                <img src={serv4} alt="serv4" width={220} height={220} />
              </div>
              <div className="r1-c4-info">
                {" "}
                <p>Only problems?</p>
                <h5 className="card-head">PEDIATRICIAN</h5>
                <p>
                  focuses on the health of infants, children, adolescents and
                  young adults. Pediatric care starts at birth and lasts through
                  a child's 21st birthday or longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
