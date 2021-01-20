const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');

// Create Express Server
const app = express();

// Logging
app.use(morgan('dev'));

// Configuration
const PORT = config.port;

// Health GET endpoint
app.get('/health', (req, res) => {
  res.send('OK');
});

// Proxy endpoints
config.apps.forEach(appProxy => {
  const {name, port} = appProxy;
  app.use(`/apps/${name}`, createProxyMiddleware({
    target: `http://localhost:${port}`,
    changeOrigin: true,
    pathRewrite: {
        [`^/apps/${name}`]: '',
    },
  }));
});

// Start the Proxy
app.listen(PORT, () => {
  console.log(`Starting Proxy at port ${PORT}`);
});