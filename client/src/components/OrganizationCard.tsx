type OrgProps = {
  org: {
    _id: string;
    name: string;
    location: string;
    cause: string;
    description?: string;
    website?: string;
  };
};

export default function OrganizationCard({ org }: OrgProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">{org.name}</h3>
      <p className="text-gray-600 mt-2">{org.cause}</p>
      <p className="text-sm text-blue-500">{org.location}</p>
      {org.description && (
        <p className="text-gray-700 mt-2 text-sm">{org.description}</p>
      )}
      <a
        href={org.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Visit Website
      </a>
    </div>
  );
}