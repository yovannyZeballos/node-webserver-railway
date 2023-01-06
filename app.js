require('dotenv').config();
const express = require("express");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use( express.static('public') );

app.get("/", (req, res) => {
  res.render('home',{
    nombre:'Yovanny Zeballos',
    titulo: 'Curso de node'
  });
});

app.get("/generic", (req, res) => {
  res.render('generic',{
    nombre:'Yovanny Zeballos',
    titulo: 'Generic'
  });
});

app.get("/elements", (req, res) => {
  res.render('elements',{
    nombre:'Yovanny Zeballos',
    titulo: 'Elements'
  });
});

  
app.listen(port);
