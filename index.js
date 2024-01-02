// Import
const dotenv = require('dotenv');
const express = require('express');
const session = require('express-session');
dotenv.config();

const router = require('./app/router');

const app = express();

// Middleware importation
const deckSession = require('./app/middleware/deckSession');

// View configuration
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('public'));

// Session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { }
}));

// Middleware
app.use(deckSession);

// Router
app.use(router);

app.use((req,res) => {
  res.status(404).send(`Oups, vous semblez perdu.`);
});


// Port
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
