import "../App.css";
import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../Assets/Logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="head-container">
        <div className="logo-div">
          <img src={logo} alt="logo" width={150} height={100} />
        </div>
        <div className="nav-1">
          <h6>Monday-Friday 08:00-19:00</h6>
          <h6>Saturday and Sunday-CLOSED</h6>
        </div>
        <div className="nav-2">
          <h6>+0800&nbsp;2336&nbsp;7811</h6>
          <h6>office@medicare.com</h6>
        </div>
        <div className="nav-3">
          <h6>27th Avenue</h6>
          <h6>Pune,410501</h6>
        </div>
      </div>

      <div className="navbar-container">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          DOCTORS
        </NavLink>
        <NavLink
          to="/appointment"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          APPOINTMENT
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          FAQ
        </NavLink>
        <NavLink
          to="/testimonials"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          TESTIMONIALS
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "nv active" : "nv")}
          style={{ textDecoration: "none" }}
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
