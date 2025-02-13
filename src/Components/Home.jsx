import React from "react";
import "./Home.css";

import banner from "../Assets/doctors.jpg";

import serv1 from "../Assets/serv1.jpg";
import serv2 from "../Assets/serv2.jpg";
import serv3 from "../Assets/serv3.jpg";
import serv4 from "../Assets/serv4.jpg";
import doc1 from "../Assets/doc1.jpg";
import doc2 from "../Assets/doc2.jpg";
import doc3 from "../Assets/doc3.jpg";
import doc4 from "../Assets/doc4.jpg";

const Home = () => {
  return (
    <>
      <div className="main-container d-flex">
        <div className="banner col-md-4">
          <img src={banner} alt="banner" width={500} />
        </div>
        <div className="content-1 col-md-6">
          <div className="c1-info p-2 ">
            <p>
              Health care, or healthcare, is the improvement of health via the
              prevention, diagnosis, treatment, amelioration or cure of disease,
              illness, injury, and other physical and mental impairments in
              people. Health care is delivered by health professionals and
              allied health fields. Medicine, dentistry, pharmacy, midwifery,
              nursing, optometry, audiology, psychology, occupational therapy,
              physical therapy, athletic training, and other health professions
              all constitute health care. The term includes work done in
              providing primary care, secondary care, and tertiary care, as well
              as in public health. Access to healthcare may vary across
              countries, communities, and individuals, influenced by social and
              economic conditions as well as health policies. Providing health
              care services means "the timely use of personal health services to
              achieve the best possible health outcomes".[3] Factors to consider
              in terms of healthcare access include financial limitations (such
              as insurance coverage), geographical and logistical barriers (such
              as additional transportation costs and the ability to take paid
              time off work to use such services), sociocultural expectations,
              and personal limitations (lack of ability to communicate with
              health care providers, poor health literacy, low income).[4]
              Limitations to health care services affect negatively the use of
              medical services, the efficacy of treatments, and overall outcome
              (well-being, mortality rates).
            </p>
          </div>
        </div>
      </div>
      <div className="content-2">
        <div className="c2-r1">
          <div className="card-1">
            <div className="card-1-img">
              <img src={serv1} alt="serv1" width={220} height={220} />
            </div>
            <div className="card-1-info">
              <p>For your whitish teeth</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                DENTIST
              </h5>
              <p>
                The dental team includes dental assistants, dental hygienists,
                dental technicians, and sometimes dental therapists.
              </p>
            </div>
          </div>
          <div className="card-2">
            <div className="card-2-img">
              <img src={serv2} alt="serv2" width={220} height={220} />
            </div>
            <div className="card-2-info">
              <p>Got a broken heart?</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                CARDIOLOGIST
              </h5>
              <p>
                the heart and blood vessels — including heart rhythm disorders,
                coronary artery disease, heart attacks, heart defects and
                infections, and related disorders.
              </p>
            </div>
          </div>
          <div className="card-3">
            <div className="card-3-img">
              <img src={serv3} alt="serv3" width={220} height={220} />
            </div>
            <div className="card-3-info">
              <p>Neck or back pain?</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                CHIROPRACTOR
              </h5>
              <p>
                specializing in diagnosing and treating musculoskeletal issues
                through spinal adjustments.
              </p>
            </div>
          </div>
          <div className="card-4">
            <div className="card-4-img">
              <img src={serv4} alt="serv4" width={220} height={220} />
            </div>
            <div className="card-4-info">
              <p>Only problems?</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                PEDIATRICIAN
              </h5>
              <p>
                focuses on the health of infants, children, adolescents and
                young adults. Pediatric care starts at birth and lasts through a
                child's 21st birthday or longer.
              </p>
            </div>
          </div>
        </div>
        <div className="c2-r2">
          <div className="card-5">
            <div className="card-5-img">
              <img src={doc1} alt="doc1" width={220} height={220} />
            </div>
            <div className="card-5-info">
              <p>dentist</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                Sussie Wolff
              </h5>
              <p>
                The dental team includes dental assistants, dental hygienists,
                dental technicians, and sometimes dental therapists.
              </p>
            </div>
          </div>
          <div className="card-6">
            <div className="card-6-img">
              <img src={doc2} alt="doc2" width={220} height={220} />
            </div>
            <div className="card-6-info">
              <p>cardiologist</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                Gabriela becktt
              </h5>
              <p>
                The dental team includes dental assistants, dental hygienists,
                the heart and blood vessels — including heart rhythm disorders.
              </p>
            </div>
          </div>
          <div className="card-7">
            <div className="card-7-img">
              <img src={doc3} alt="doc3" width={220} height={220} />
            </div>
            <div className="card-7-info">
              <p>chiropractor</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                George Button
              </h5>
              <p>
                specializing in diagnosing and treating musculoskeletal issues
                through spinal adjustments
              </p>
            </div>
          </div>
          <div className="card-8">
            <div className="card-8-img">
              <img src={doc4} alt="doc4" width={220} height={220} />
            </div>
            <div className="card-8-info">
              <p>peditracian</p>
              <h5 className="card-head" style={{ fontWeight: "bold" }}>
                Ashley Wilson
              </h5>
              <p>
                focuses on the health of infants, children, adolescents and
                young adults. Pediatric care starts at birth and lasts through a
                child's 21st birthday or longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
