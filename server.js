require('dotenv').config();
const cookieSession = require("cookie-session");
const express = require("express");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const path = require("path");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false }, () => {
  console.log("Connected to MongoDb");
});

app.use(
    cookieSession({
      name: "session",
      keys: ['awesomesauce'],
      maxAge: 24 * 60 * 60 * 100
    })
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define middleware here
//app.use(require('morgan')('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser( 'awesomesauce'));

// Passport.js Authentication
// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());



app.use(cors({
    origin: "*", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

// Define API routes here
require('./routes/auth.routes')(app, passport);
require('./routes/user.routes')(app, passport);
require('./routes/posts.routes')(app, passport);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
