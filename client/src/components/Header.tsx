import { Link } from 'react-router-dom';
import React from 'react';
export default function Header() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">VolunteerHub</Link>
        <div className="space-x-6">
          <Link to="/organizations" className="hover:text-blue-200">Browse NGOs</Link>
          <Link to="/dashboard" className="hover:text-blue-200">Profile</Link>
        </div>
      </div>
    </nav>
  );
}