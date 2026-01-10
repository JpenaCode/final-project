require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pg = require('pg');
//pg: made for node.js, allows the app to connect to posgres database

const Pool = pg.Pool;
//pool: prepares a pg library manager, handles database connections
//Pool: built into pg, reuses connections instead of making new ones

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
//new: built into javascript (Create a real thing from these instructions), in this case create the manager (Pool)
//connectionString: this says "here is the location of the database"
//process.env.DATABASE_URL: this is the actual location, in the env file
//process: built into Node.js, when i input 'npm run dev' do the following


app.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  // pool: the database connection manager.
  // .query: ask the database a question.
  // 'SELECT * FROM products': what we're asking for from the database
  res.json(result.rows);
  //.rows: makes sure we only get the product's information from the table and nothing else
});

app.get('/products/:item', async (req, res) => {
  // item: dynamic url based on the product
  const item = req.params.item;
  const result = await pool.query('SELECT * FROM products WHERE item = $1', [item] );
  // $1 : is the placeholder for [item]
  //[item] : is the value of the product in the item column
  res.json(result.rows[0]);
  // [0] : makes sure we only pull one single item and not the whole list
});


const PORT = 3001;
app.listen(PORT, () => {
});
