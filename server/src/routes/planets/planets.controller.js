const { planets } = require('../../models/planets.model');

function getAllPlanets(req, res) {
  return res.status(200).join(planets);
}

module.exports = {
  getAllPlanets,
};
