const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const { errorHandler, logErrors, 
boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hola desde mi primer server en express')
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Corriendo en localhost puerto: ' + port)
});