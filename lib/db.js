// lib/db.js
const { MongoClient } = require("mongodb"); // Use "require" instead of "import"

const uri = process.env.MONGODB_URI;
let cachedDb = null;

async function connectToDb() {
  if (cachedDb) return cachedDb;
  const client = await MongoClient.connect(uri);
  const db = client.db("volunteerhub");
  cachedDb = { db, client };
  return cachedDb;
}

module.exports = { connectToDb }; // Use "module.exports"
