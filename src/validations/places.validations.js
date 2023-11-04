const Joi = require("joi");

const location = Joi.object({
  lat: Joi.string().required(),
  long: Joi.string().required(),
}).required();

const place = Joi.object({
  place_name: Joi.string().required(),
  place_type: Joi.string()
    .valid("restaurant", "street-food", "cafes")
    .required(),
  place_location: location,
  place_image: Joi.string(),
});

module.exports = {
  place,
};
