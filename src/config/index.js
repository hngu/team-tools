module.exports = (NODE_ENV) => {
  let config;

  switch(NODE_ENV) {
    case 'development':
      config = require('./development-config');
      break;
    case 'staging':
    case 'development':
    default:
      throw new Error(`Unsupported environment detected ${NODE_ENV}`);
  }

  return config;
}