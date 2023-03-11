const express = require("express");
const Student = require("../models/studentModel");

const router = express.Router();

router.get("/", (req, res) => {
  Student.find({}, (err, data) => {
    res.status(200).json(data)
  })
});

router.post("/add", (req, res) => {
  const newStudent = new Student(req.body);
  newStudent.save()
    .then(() => {res.status(201).json(newStudent);})
    .catch((err) => res.status(400).json( err ));
});

module.exports = router;
