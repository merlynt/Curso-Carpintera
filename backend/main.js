const express = require("express");
const cors = require("cors");
const dbConnect = require("./db/connect");
const courseRoutes = require("./routes/courseRoutes");

dbConnect();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); 
app.use("/curso", courseRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
