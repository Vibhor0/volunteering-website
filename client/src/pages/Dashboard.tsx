import React from 'react';
export default function Dashboard() {
    // Example data (replace with API calls)
    const userHours = 25;
    const certificates = ["Eco Warrior Certificate", "Teach India Participation"];
  
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Your Dashboard</h2>
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <p className="text-lg">
            Total Volunteered Hours: <span className="font-bold">{userHours}</span>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Certificates</h3>
          <ul className="space-y-2">
            {certificates.map((cert, index) => (
              <li key={index} className="bg-white p-4 rounded shadow-sm">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }