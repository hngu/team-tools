const HomeRouter = require('./home-routes');

module.exports = (app) => {
  app.use('/', HomeRouter);
};