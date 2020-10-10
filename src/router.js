const HomeController = require('./api/home-controller');

module.exports = (app) => {
  app.use('/', HomeController);
};