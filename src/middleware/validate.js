const requestHandler = require("../utils/requestHandler");

const validate = (schema) => (req, res, next) => {
  schema.validate(req.body);
  const { value, error } = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");

    return requestHandler.handle400(res, errorMessage);
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
