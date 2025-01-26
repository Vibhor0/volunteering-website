// api/orgs/index.js
import { connectToDb } from "../../lib/db";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle OPTIONS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Handle GET requests
  if (req.method === "GET") {
    try {
      const { db } = await connectToDb();
      const orgs = await db.collection("organizations").find({}).toArray();
      return res.status(200).json(orgs);
    } catch (error) {
      console.error("API Error:", error);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
