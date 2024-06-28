const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/.env" });
const cors = require("cors");
const app = express();
const port = process.env.PORT
const bodyParser = require("body-parser");
const databaseConnect = require("./Config/dbConnection");
const taskRouter = require("./Router/taskRout");
databaseConnect()
 
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api", taskRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
