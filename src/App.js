import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import FAQ from "./Components/FAQ.jsx";
import Doctors from "./Components/Doctors.jsx";
import About from "./Components/About.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Appointment from "./Components/Appointment.jsx";
import Contact from "./Components/Contact.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import Services from "./Components/Services.jsx";
import Admin from "./Components/Admin.jsx";
import Appointmentdetails from "./Components/Appointmentdetails.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/doctors" element={<Doctors />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/appointment" element={<Appointment />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route
            path="/appointmentdetails"
            element={<Appointmentdetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
