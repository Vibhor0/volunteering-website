import React from 'react';
import { useEffect, useState } from 'react';
import OrganizationCard from '../components/OrganizationCard.tsx';
import SearchFilters from '../components/SearchFilters.tsx';
import { api } from '../services/api.ts';

type Organization = {
  _id: string;
  name: string;
  location: string;
  cause: string;
  description?: string;
  website?: string;
};

export default function Organizations() {
  const [orgs, setOrgs] = useState<Organization[]>([]);

  useEffect(() => {
    // Fetch organizations from backend API
    const fetchOrgs = async () => {
      try {
        const response = await api.get('/orgs');
        setOrgs(response.data);
      } catch (error) {
        console.error('Failed to fetch organizations:', error);
      }
    };
    fetchOrgs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchFilters onSearch={() => {}} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {orgs.map((org) => (
          <OrganizationCard key={org._id} org={org} />
        ))}
      </div>
    </div>
  );
}