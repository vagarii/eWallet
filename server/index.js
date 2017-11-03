const express = require('express');
const bodyParser = require('body-parser');
// set Routes
const userRoutes = require('./routes/user');
const nodeRoutes = require('./routes/node');
const transactionRoutes = require('./routes/transaction');


const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use('/api/user', userRoutes);
app.use('/api/node', nodeRoutes);
app.use('/api/transaction', transactionRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});



