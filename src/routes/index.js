var express = require("express");
var placesRoute = require("./places.route");

var router = express.Router();

const defaultRoutes = [
  {
    path: "/places",
    route: placesRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
