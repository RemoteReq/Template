const express = require('express');

<<<<<<< HEAD
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
=======
// middleware
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
>>>>>>> a7d09a547fe9f18f3d8b9d1d857ef9d470fe651b

const app = express();
const PORT = 3030;

<<<<<<< HEAD
// express middleware

// User history to intecept client requests and forward to React Router history
app.use(history());

=======
// User history to intecept client requests and forward to React Router history
app.use(history());

// express middleware
>>>>>>> a7d09a547fe9f18f3d8b9d1d857ef9d470fe651b
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});