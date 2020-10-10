const express = require('express');
const app = express();
const config = require('./config')(process.env.NODE_ENV);
const router = require('./routes');

router(app);

app.listen(config.PORT, () => {
  console.log(`Listening in port ${config.PORT}`);
});