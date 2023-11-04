var express = require("express");
const { getPlaces, addPlace } = require("../controllers/places.controller");
const validate = require("../middleware/validate");
const { place } = require("../validations/places.validations");

var router = express.Router();

router.get("/", getPlaces);

router.post("/create", validate(place), addPlace);

module.exports = router;
