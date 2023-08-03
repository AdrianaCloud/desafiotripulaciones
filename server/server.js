const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config()
const usersApiRouter = require('./routes/usersApiRoutes')
const itemsApiRouter = require('./routes/itemsApiRoutes')
const publicationsApiRouter = require('./routes/publicationsApiRoutes')
const perfilApiRouter = require('./routes/perfilApiRoutes')
const cors = require("cors");
const helmet = require("helmet");
const app = express();
app.use(helmet());
app.use(cors({origin: "https://frontend-app-hbpdfkrhla-ew.a.run.app/"})) //Enable all CORS requests
app.use(express.json({ extended: false }));
app.use(cookieParser());

//Routes 
app.use("/api/users", usersApiRouter)
app.use("/api/items", itemsApiRouter)
app.use("/api/publications", publicationsApiRouter)
app.use("/api/perfil", perfilApiRouter)

//Middlewares
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  res.status(200).json({
    msg: "Hola! Estás en la test del Backend"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
