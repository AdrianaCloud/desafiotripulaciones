const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Hola! Estás en la Home del Backend"
  })
})

app.get("/test", (req, res) => {
  res.status(200).json({
    msg: "Hola! Estás en la test del Backend"
  })
})

//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
  //*Set static folder
  app.use(express.static('../client/build'));
  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, '../client/build','index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started port ${PORT}`));
