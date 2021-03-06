const knex = require('../../knex');

const getSources = (req, res) => {
  knex('users')
  .where('id', req.claim.userId)
  .select('water_systems_id')
  .then((result) => {
    if (Number(req.params.water_systems_id) !== Number(result[0].water_systems_id)) {
      return res.send({ status: 400, ErrorMessage: 'water system not found!' });
    }
    return knex('sources')
    .where('water_systems_id', req.params.water_systems_id);
  })
  .then((results) => {
    return res.json(results);
  })
  .catch((err) => {
    return res.send({ status: 400, ErrorMessage: err });
  });
};

module.exports = getSources;
