// server.js file
const express = require('express');
const mongoose = require('mongoose');
const dateFormat = require('dateformat');
const app = express();

// ──── CONNECT TO MONGGODB ─────────────────────────────────────────────────────
const db = require('./config/key').mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch(err => {
    console.log(err);
    console.log('MongoDB Not Connected');
  });

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//
app.get('/', (req, res) => {
  const now = new Date();
  res.json({
          "Title"     : "Devops",
          "Message"   : "Hello world!",
          "Time"      : dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")
        });
});

//
// ─── RUN SERVER ─────────────────────────────────────────────────────────────────
//
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
