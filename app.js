const Task = require("./models/Task");
const connectDB = require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

require("dotenv").config();


app.use(express.json());
app.use(cors())

app.get("/hello", (req, res) => {
  res.send("Task manager app");
});


app.post("/api/v1/task", async (req, res) => {
 try {
     const task = await Task.create(req.body);
     res.status(201).json({ task });
 } catch (error) {
     res.status(400).json(`request failed`)
 } 
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}



const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
