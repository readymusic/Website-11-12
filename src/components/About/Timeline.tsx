import React from 'react';

const timelineEvents = [
  {
    year: 2016,
    title: 'Studio Foundation',
    description: 'Ready Music Studios opens its doors in Nashville'
  },
  {
    year: 2018,
    title: 'First Gold Record',
    description: 'Produced breakthrough album "Midnight Tales"'
  },
  {
    year: 2020,
    title: 'Studio Expansion',
    description: 'Added two new recording rooms and upgraded equipment'
  },
  {
    year: 2022,
    title: 'Major Motion Picture',
    description: 'Music featured in award-winning film "Eternal Echo"'
  }
];

const Timeline = () => {
  return (
    <div className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-surface mb-16 text-center">Our Journey</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20" />
          
          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full" />
                
                {/* Content */}
                <div className={`w-5/12 ${
                  index % 2 === 0 ? 'pr-16' : 'pl-16'
                }`}>
                  <div className="bg-primary p-6 rounded-xl hover:bg-primary-light transition-all duration-300">
                    <span className="text-accent font-bold text-xl">{event.year}</span>
                    <h4 className="text-surface font-semibold text-lg mt-2">{event.title}</h4>
                    <p className="text-surface/80 mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;