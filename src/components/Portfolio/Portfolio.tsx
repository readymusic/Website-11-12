import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioFilters from './PortfolioFilters';

const portfolioData = [
  {
    title: "Midnight Tales",
    artist: "Luna Eclipse",
    year: 2023,
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80",
    description: "A groundbreaking album that blends electronic and orchestral elements, pushing the boundaries of modern music production.",
    achievements: [
      "Platinum Record",
      "Grammy Nomination - Best Electronic Album",
      "Billboard Top 10"
    ],
    streamingLink: "#",
    category: "Platinum Records"
  },
  {
    title: "Eternal Echo",
    artist: "Film Score",
    year: 2022,
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80",
    description: "Original score for the award-winning psychological thriller that captivated audiences worldwide.",
    achievements: [
      "Academy Award Nomination",
      "Best Original Score - Critics Choice",
      "BAFTA Nomination"
    ],
    category: "Film Scores"
  },
  {
    title: "Urban Symphony",
    artist: "The Metro Collective",
    year: 2023,
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
    description: "A fusion of classical and hip-hop elements, creating a unique sonic landscape that defines contemporary urban music.",
    achievements: [
      "2x Platinum",
      "Best Urban Contemporary Album",
      "Streaming Record"
    ],
    streamingLink: "#",
    category: "Platinum Records"
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPortfolio = portfolioData.filter(item => 
    activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <section id="portfolio" className="bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-surface mb-4">Our Portfolio</h2>
          <p className="text-xl text-surface/80 max-w-3xl mx-auto">
            Showcasing our finest work and groundbreaking productions that have shaped the industry
          </p>
        </div>

        <PortfolioFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item, index) => (
            <PortfolioCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;