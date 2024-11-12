import React, { useState } from 'react';
import { Calendar, Clock, DollarSign } from 'lucide-react';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { id: 'recording', name: 'Recording Session', rate: 100 },
    { id: 'mixing', name: 'Mixing Session', rate: 80 },
    { id: 'mastering', name: 'Mastering', rate: 60 },
    { id: 'production', name: 'Full Production', rate: 150 },
  ];

  return (
    <div className="bg-primary rounded-xl p-6">
      <h3 className="text-2xl font-bold text-surface mb-6">Book Your Session</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-surface/80 mb-2">
            Select Service
          </label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:bg-primary focus:ring-0 text-surface"
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.rate}/hr
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-surface/80 mb-2">
            Select Date & Time
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 bg-primary-dark p-3 rounded-lg">
              <Calendar className="h-5 w-5 text-accent" />
              <input
                type="date"
                className="bg-transparent text-surface focus:outline-none"
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
              />
            </div>
            <div className="flex items-center space-x-2 bg-primary-dark p-3 rounded-lg">
              <Clock className="h-5 w-5 text-accent" />
              <select className="bg-transparent text-surface focus:outline-none w-full">
                <option value="">Select time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-primary-dark p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-surface/80">Estimated Cost</span>
            <div className="flex items-center text-accent">
              <DollarSign className="h-5 w-5" />
              <span className="text-xl font-bold">
                {selectedService ? services.find(s => s.id === selectedService)?.rate : 0}
              </span>
              <span className="text-sm text-surface/60">/hr</span>
            </div>
          </div>
          <p className="text-sm text-surface/60">
            Final cost may vary based on project requirements
          </p>
        </div>

        <button className="w-full bg-accent hover:bg-accent-dark text-primary py-3 rounded-lg transition-colors">
          Reserve Session
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;