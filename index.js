const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde mi primer server en express')
});

routerApi(app);


app.listen(port, () => {
  console.log('Corriendo en localhost puerto: ' + port)
});