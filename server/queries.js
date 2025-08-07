//Connect to Postgres using the node-postgres package

const { response } = require("express");

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "favlinks",
  password: "password",
  port: 5432,
});

//Create all the functions that will be used to interact with the database
//Create a new link in the db

const createLink = (req, res) => {
  //Take the data the user passes us and insert it into our table
  const name = req.body.name;
  const URL = req.body.URL;

  pool.query(
    "INSERT INTO links (name, URL) VALUES ($1,$2)",
    [name, URL],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Link added with ID: ${results.insertID}`);
    }
  );
};

//Get back all the data in the database

const getLinks = (req, res) => {
  pool.query("SELECT * FROM links ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

//Update a link in the db

//Delete a link in the db

module.exports = {
  getLinks,
  createLink,
};
