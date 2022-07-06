// @ts-nocheck
//controller for sending pokemon data

const express = require("express");
const router = express.Router();

const People = require("../models/people");
const Houses = require("../models/house");
const Addresses = require("../models/address");

router.get("/", (req, res) => {
  const data = "Working";
  res.send(data);
});

router.get("/people", (req, res) => {
  let data = People.all;
  const {
    query: { minAge, maxAge, householdSize },
  } = req;

  if (minAge) {
    data = People.all.filter(
      (person) => person.age >= minAge
      );
  }

  if (maxAge) {
    data = People.all.filter(
      (person) => person.age <= maxAge
    );
  }

  if (minAge && maxAge) {
    data = People.all.filter(
      (person) => person.age >= minAge && person.age <= maxAge
    );
  }

  if (householdSize) {
    data = People.all.filter((person) => person.noOfPeople == householdSize);
  }

  if (minAge && maxAge && householdSize) {
    data = People.all.filter(
      (person) =>
        person.age >= minAge &&
        person.age <= maxAge &&
        person.noOfPeople == householdSize
    );
  }

  res.send(data);
});

router.get("/houses", (req, res) => {
  const data = Houses.all;
  res.send(data);
});
router.get("/addresses", (req, res) => {
  const data = Addresses.all;
  res.send(data);
});

router.get("/people/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedPeople = People.findById(id);
  res.send(selectedPeople);
});
router.get("/houses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedHouse = Houses.findById(id);
  res.send(selectedHouse);
});
router.get("/addresses/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedAddress = Addresses.findById(id);
  res.send(selectedAddress);
});

router.post("/people", (req, res) => {
  const data = req.body;
  const newPerson = People.create(data);
  res.status(201).send(newPerson);
});
router.post("/houses", (req, res) => {
  const data = req.body;
  const newHouse = Houses.create(data);
  res.status(201).send(newHouse);
});
router.post("/addresses", (req, res) => {
  const data = req.body;
  const newAddress = Addresses.create(data);
  res.status(201).send(newAddress);
});

router.delete("/people/:id", (req, res) => {
  const personId = parseInt(req.params.id);
  const personToDestroy = People.findById(personId);
  personToDestroy.destroy();
  res.status(204).send();
});
router.delete("/houses/:id", (req, res) => {
  const houseId = parseInt(req.params.id);
  const houseToDestroy = Houses.findById(houseId);
  houseToDestroy.destroy();
  res.status(204).send();
});
router.delete("/addresses/:id", (req, res) => {
  const addressId = parseInt(req.params.id);
  const addressToDestroy = Addresses.findById(addressId);
  addressToDestroy.destroy();
  res.status(204).send();
});

module.exports = router;
