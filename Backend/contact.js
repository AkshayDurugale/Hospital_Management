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

const contactSchema = new mongoose.Schema({
  pname: String,
  pemail: String,
  ptel: String,
  pmsg: String,
});

const Contacts = mongoose.model("Contacts", contactSchema);

app.post("/contacts", async (req, res) => {
  try {
    const person = new Contacts(req.body);
    await person.save();
    res.status(201).send(person);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const person = await Contacts.find();
    res.status(200).send(person);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/delete/contacts/:id", async (req, res) => {
  try {
    await Contacts.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Data Deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(7000, () => {
  console.log("7000 is running");
});
