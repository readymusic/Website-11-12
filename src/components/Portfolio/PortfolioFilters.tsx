import React from 'react';

interface PortfolioFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  'All',
  'Platinum Records',
  'Grammy Nominated',
  'Film Scores',
  'Independent',
];

const PortfolioFilters: React.FC<PortfolioFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-6 py-2 rounded-full font-mono text-sm transition-all ${
            activeFilter === filter
              ? 'bg-accent text-primary'
              : 'bg-primary/50 text-surface/80 hover:bg-primary'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilters;