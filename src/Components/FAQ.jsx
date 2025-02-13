import React from "react";
import "./FAQ.css";
import banner3 from "../Assets/banner3.jpg";

const FAQ = () => {
  return (
    <div className="FAQ-container">
      <div className="faq-banner">
        <img src={banner3} alt="banner3" width={1400} />
      </div>
      <div className="faq-content">
        <h1 className="faq-head">FAQ</h1>
        <h3>1. Are all the consultants available 24 hours?</h3>
        <p>
          We have senior consultants of repute visiting us with prior
          appointments. We have doctors in the positions of medical and surgical
          registrars, junior and senior registrars, and junior and senior
          residents, thus offering 24 hours coverage in areas such as Casualty,
          Wards, Intensive Care Units and Post Op recovery areas. Any complaints
          in the odd hours are first attended to by the resident doctors and,
          depending upon the case, the respective consultants are called in to
          attend to the patients.
        </p>

        <h3>2. What is the procedure for discharge?</h3>
        <p>
          Your consultant will make an entry for discharge on your case sheet.
          After this, the resident doctors prepare the discharge card. Then the
          file is sent to the IP reception for clearance, after which the final
          bill is prepared, taking into account all the deposits. When the final
          bill is ready, payment has to be made at the admission counter. This
          procedure may take 2-3 hours.
        </p>

        <h3>
          3. How does the patient take benefit of his medical insurance policy
          while taking treatment at the hospital?
        </h3>
        <p>
          Medical Insurance and reimbursement facilities are available. For
          details contact- 9146018505
        </p>
        <h3>4. What are the various modes of payment for hospital services?</h3>
        <p>
          Payment can be made in cash, by Phonepe & Googlepay, by demand draft,
          by internet banking and by credit and debit cards. The billing and
          registration counters are open for 24hrs on all days including sundays
          and holidays.
        </p>
        <h3>5. Do we need to pay any advance at the time of admission?</h3>
        <p>
          Yes, patients are required to pay a deposit as per the category of the
          bed at the time of admission. In case of a surgery or a procedure, the
          total estimated amount has to be deposited with the hospital before
          the surgery.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
