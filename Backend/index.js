const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/HospitalData")
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log("err");
  });

const appointmentSchema = new mongoose.Schema({
  fname: String,
  gender: String,
  email: String,
  phone: String,
  dname: String,
  msg: String,
  status: String,
});

const appointments = mongoose.model("appointments", appointmentSchema);

// Appointment data

app.post("/appointment", async (req, res) => {
  try {
    const apt = new appointments(req.body);
    await apt.save();
    res.status(201).send(apt);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/appointment", async (req, res) => {
  try {
    const apt = await appointments.find();
    res.status(200).send(apt);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/update/appointment/:id", async (req, res) => {
  try {
    const updateAppointment = await appointments.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateAppointment);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/delete/appointment/:id", async (req, res) => {
  try {
    await appointments.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Data Deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Contacted Data

app.listen(8000, () => {
  console.log("8000 is running");
});
