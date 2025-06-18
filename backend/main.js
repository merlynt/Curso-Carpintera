const express = require ("express");
const cors = require("cors");
const dbConnect = require("./db/connect");
const bodyParser = require ("body-parser");
const bakcursos = require("./routes/courseRoutes");

dbConnect();
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/curso",bakcursos);


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
