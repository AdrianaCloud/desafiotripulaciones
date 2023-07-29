const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();
const usersApiRouter = require('./routes/usersApiRoutes');
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ extended: false }));
app.use(cookieParser());

//Routes 
app.use("/api/users", usersApiRouter);

//Middlewares
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.status(200).json({
    msg: "Hola! Estás en la test del Backend"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
