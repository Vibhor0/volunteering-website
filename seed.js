require('dotenv').config();
const { connectToDb } = require('./lib/db');

async function seedOrganizations() {
  try {
    const { db } = await connectToDb();
    
    // Delete existing data to avoid duplicates
    await db.collection('organizations').deleteMany({});
    
    // Insert fresh data
    const result = await db.collection('organizations').insertMany([
      { 
        name: "Eco Warriors", 
        location: "Mumbai", 
        cause: "Environment",
        description: "Tree plantation drives",
        website: "https://ecowarriors.in"
      },
      { 
        name: "Teach India", 
        location: "Delhi", 
        cause: "Education",
        description: "Teaching volunteers",
        website: "https://teachindia.org"
      }
    ]);
    
    console.log(`✅ Seeded ${result.insertedCount} organizations!`);
  } catch (err) {
    console.error("❌ SEEDING FAILED:", err.message);
  } finally {
    process.exit();
  }
}

seedOrganizations();