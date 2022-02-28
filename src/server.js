const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex");

// require("dotenv").config();

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./src/controllers/profile");
const create = require("./src/controllers/create");
// import { connectToDatabase } from "./controllers/database";

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://Doomark:camelow123@testcluster.c5xxe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });

// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
//define db from knex
const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL, //'postgresql-rectangular-39808',
    ssl: true,
  },
});

//express
const app = express();
app.use(express.json());
app.use(cors());

//index
app.get("/", (req, res) => {
  res.send("it is working");
});

//logar
app.post("/signin", (req, res) => {
  signin.handleSignin(req, res, db, bcrypt);
});

//registro-adicionar na db
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});
//create-user-status
app.post("/create", (req, res) => {
  create.handleCreation(req, res, db);
});
// requisitar perfil id pra açoes futuras
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});
