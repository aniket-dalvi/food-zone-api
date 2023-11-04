const Places = require("../models/places.model");
const requestHandler = require("../utils/requestHandler");

const addPlace = async (req, res) => {
  try {
    var result = await Places.add(req.body);

    requestHandler.handle200(res, { place_id: result._path.segments[1] });
  } catch (e) {
    requestHandler.handle405(res);
  }
};

const getPlaces = async (req, res) => {
  try {
    const result = await Places.get();

    const data = [];

    result.forEach((document) => {
      data.push(document.data());
    });

    requestHandler.handle200(res, data);
  } catch (e) {
    requestHandler.handle405(res);
  }
};

module.exports = {
  addPlace,
  getPlaces,
};
