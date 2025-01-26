import React from 'react';
export default function Home() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to VolunteerHub</h1>
        <p className="text-gray-600 mb-6">
          Connect with NGOs and boost your extracurricular profile!
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    );
  }