import { connectToDb } from "../../lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const { db } = await connectToDb();
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      await db
        .collection("users")
        .insertOne({ email, password: hashedPassword });
      res.status(201).json({ message: "User created!" });
    } catch (err) {
      res.status(500).json({ error: "Email already exists" });
    }
  }
}
