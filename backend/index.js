require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pg = require('pg');

const Pool = pg.Pool;

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

app.get('/products/:slug', async (req, res) => {
  const slug = req.params.slug;
  const result = await pool.query(
    'SELECT * FROM products WHERE slug = $1',
    [slug]
  );
  res.json(result.rows[0]);
});


const PORT = 3001;
app.listen(PORT, () => {
});
