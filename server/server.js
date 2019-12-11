const express = require('express');

const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const app = express();
const PORT = 3030;

// express middleware

// User history to intecept client requests and forward to React Router history
app.use(history());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});