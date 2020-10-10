const router = require('express').Router();
const HomeService = require('../services/home-service');

router.get('/', (request, response) => {
  const data = HomeService.get();
  response.send(data);
});

module.exports = router;