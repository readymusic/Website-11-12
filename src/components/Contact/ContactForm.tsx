import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
    demo: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, demo: e.target.files[0] });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-surface/80">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:bg-primary focus:ring-0 text-surface"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-surface/80">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:bg-primary focus:ring-0 text-surface"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-surface/80">
          Project Type
        </label>
        <select
          id="projectType"
          required
          className="mt-1 block w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:bg-primary focus:ring-0 text-surface"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        >
          <option value="">Select a project type</option>
          <option value="recording">Recording</option>
          <option value="mixing">Mixing</option>
          <option value="mastering">Mastering</option>
          <option value="production">Full Production</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-surface/80">
          Project Details
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:bg-primary focus:ring-0 text-surface"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-surface/80">
          Demo Upload (optional)
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-surface/20 border-dashed rounded-lg hover:border-accent transition-colors">
          <div className="space-y-1 text-center">
            <Upload className="mx-auto h-12 w-12 text-surface/40" />
            <div className="flex text-sm text-surface/80">
              <label htmlFor="demo" className="relative cursor-pointer rounded-md font-medium text-accent hover:text-accent-light">
                <span>Upload a file</span>
                <input
                  id="demo"
                  name="demo"
                  type="file"
                  className="sr-only"
                  accept="audio/*"
                  onChange={handleFileChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-surface/60">
              MP3, WAV up to 10MB
            </p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-primary px-6 py-3 rounded-lg transition-colors"
      >
        <Send className="h-5 w-5" />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;