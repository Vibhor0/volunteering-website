type FilterProps = {
  onSearch: () => void; // Add proper type for filters later
};

export default function SearchFilters({ onSearch }: FilterProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Location"
        className="p-2 border rounded"
      />
      <select className="p-2 border rounded">
        <option value="">All Causes</option>
        <option>Environment</option>
        <option>Education</option>
      </select>
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}