const express = require('express');
const app = express();
require('dotenv').config();
const config = require('config')
const mongoose = require('mongoose');
const cors = require('cors')
const { apiRouter } = require('./routers.js');

const PORT = process.env.PORT || config.get("port");
app.use(cors({
  methods: "GET,POST,DELETE",
  allowedHeaders: ['Content-Type'],
}));


app.use(express.json());

app.use('/api', apiRouter);


async function start() {
  try {
    await mongoose.connect(config.get("mongoUri", {
      useNewUrlParser: true,
      useUnifieTopologi: true,
      useCreateIndex: true
    }))

    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT} port...`);
    });

  } catch (e) {
    console.log('something went wrong when starting the server')
    process.exit(1)
  }
};

start();

