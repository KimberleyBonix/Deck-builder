const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:c1kCPgsMK8Ev@ep-polished-lake-75574727-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
})

module.exports = pool;
