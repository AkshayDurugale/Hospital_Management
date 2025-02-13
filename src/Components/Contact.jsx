import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const addData = (data) => {
    axios
      .post("http://localhost:7000/contacts", data)
      .then((response) => {
        alert("Form successfully submitted!");
        reset();
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        alert("There was an error submitting the form. Please try again.");
      });
  };
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit(addData)}>
          <div className="contact-form">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name here"
              {...register("pname")}
            />
            <br />
            <input
              type="email"
              placeholder="Enter your email here"
              className="form-control"
              {...register("pemail")}
            />
            <br />
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your mobile number here"
              {...register("ptel")}
            />
            <br />
            <textarea
              className="form-control"
              name="contact-text"
              id="contact-text"
              placeholder="Enter your message here.."
              {...register("pmsg")}
            ></textarea>

            <br />
            <input
              type="Submit"
              className="btn btn-success"
              value="Contact Us"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
