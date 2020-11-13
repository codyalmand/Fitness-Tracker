const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/";
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnesstrackerDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// app.use(routes);
// require("./routes")(app);
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);


app.listen(PORT, function () {
    console.log("Listening on PORT" + PORT)
}); 