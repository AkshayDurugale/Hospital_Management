import React from "react";
import "./Appointment.css";
import { useForm } from "react-hook-form";
import banner from "../Assets/banner3.jpg";
import axios from "axios";

const Appointment = () => {
  const { register, handleSubmit, reset } = useForm();

  const addData = (data) => {
    axios
      .post("http://localhost:8000/appointment", data)
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
    <div className="Appointment-container">
      <div className="ap-content">
        <h6>book a visit your doctor</h6>
        <h1>MAKE AN APPOINTMENT NOW</h1>
      </div>

      <div className="ap-form">
        <form onSubmit={handleSubmit(addData)} className="form-container">
          <div className="form-col">
            <div className="c1">
              <label htmlFor="fname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                {...register("fname", { required: "Full name is required" })}
              />
              <br />
              <label htmlFor="dname" className="form-label">
                Select Doctor
              </label>
              <select
                name="doctor"
                id="dname"
                className="form-control"
                {...register("dname", { required: "Please select a doctor" })}
              >
                <option value="">Select Doctor</option>
                <option value="Sussie Wolf">Sussie Wolf</option>
                <option value="Gabriela Becket">Gabriela Becket</option>
                <option value="George Button">George Button</option>
                <option value="Sussie Wolf">Sussie Wolf</option>
              </select>
              <br />

              <label htmlFor="gender" className="form-label">
                Gender :
              </label>
              <input
                type="radio"
                id="male"
                value="male"
                {...register("gender", {
                  required: "Please select your gender",
                })}
              />
              <label htmlFor="male" className="form-label">
                Male
              </label>
              <input
                type="radio"
                {...register("gender")}
                id="female"
                value="female"
              />
              <label htmlFor="female" className="form-label">
                Female
              </label>
            </div>

            <div className="c2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                {...register("phone", { required: "Phone number is required" })}
              />
              <br />
              <label htmlFor="msg" className="form-label">
                Message
              </label>
              <textarea
                name="msgtxt"
                {...register("msg")}
                className="form-control w-100"
                placeholder="Enter your message here.."
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-success btn1">
            Submit
          </button>
          &nbsp; &nbsp;
          <button type="reset" className="btn btn-success btn1">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
