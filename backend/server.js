require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const todosRouter = require("./routes/todos");
const PORT = process.env.PORT;

// APP
const app = express();

// MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// ROUTES
app.use("/api/todos", todosRouter);

// CONNECT TO DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB");
    // LISTENING FOR REQUESTS
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
