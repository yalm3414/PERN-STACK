const express = require("express");
const app = express();
const path = require("path");
const db = require("./queries");
const PORT = 9001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "../client/dist")));

//routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

//CRUD

//Create - add data to db

//read - get data from db
app.get("/links", db.getLinks);
app.post("/links", db.createLink);

//UPDATE - update data in db
//Delete - delete data from db

//Starting express on our port
app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}.`);
});
