if (process.env.NODE.ENV == "production") {
  require("dotenv").config();
}

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index");
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: process.env.USE_NEW_URL_PARSER,
  useUnifiedTopology: process.env.USE_UNIFIED_TOPOLOGY,
  useFindAndModify: process.env.USE_FIND_AND_MODIFY,
  useCreateIndex: process.env.USE_CREATE_INDEX
}).then(() => {
    console.log('Database connected!')
}).catch(err => {
    console.log('WE HAVE AN ERROR...' + err)
})
// const db = mongoose.connection;

// db.on('error', error => console.log(error));
// db.once(() => console.log('Connected to Mongoose...'))


const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
