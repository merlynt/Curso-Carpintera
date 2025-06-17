const express = require ("express");
const cors = require("cors");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const bakcursos = require("./rutas/curso");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/curso",bakcursos);

//conectarse a la base de datos
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/dbcarpinteria';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error de coneccion a MongoDB:"));
db.once("open", () =>{
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
