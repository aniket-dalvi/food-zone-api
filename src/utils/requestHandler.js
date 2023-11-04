const httpStatus = require("http-status");

const requestHandler = {
  handle200: (res, data) =>
    res
      .status(httpStatus["OK"])
      .send({ success: true, message: "success", data }),
  handle405: (res) =>
    res
      .status(httpStatus["SERVER_ERROR"])
      .send({ success: false, message: "Something went wrong." }),

  handle400: (res, message) =>
    res.status(httpStatus["BAD_REQUEST"]).send({ succees: false, message }),
};

module.exports = requestHandler;
