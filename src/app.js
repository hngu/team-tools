const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({data: "Hello World!"});
});

app.listen(3001, () => {
  console.log('Listening in port 3001');
});