import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import BookingCalendar from './BookingCalendar';

const Contact = () => {
  return (
    <section id="contact" className="bg-primary-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-surface mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-surface/80 max-w-3xl mx-auto">
            Ready to start your next project? Contact us or book a session directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-primary rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-surface mb-6">Contact Us</h3>
              <ContactForm />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary p-6 rounded-xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface">Location</h4>
                    <p className="text-surface/80">Nashville, TN</p>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45012861438!2d-86.92582341422958!3d36.17331569951672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN%2C%20USA!5e0!3m2!1sen!2s!4v1644834087234!5m2!1sen!2s"
                  className="w-full h-48 rounded-lg mt-4"
                  loading="lazy"
                ></iframe>
              </div>

              <div className="space-y-4">
                <div className="bg-primary p-6 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-surface">Phone</h4>
                      <p className="text-surface/80">(615) 555-0123</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-6 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-surface">Email</h4>
                      <p className="text-surface/80">info@readymusic.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary p-6 rounded-xl">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-surface">Hours</h4>
                      <p className="text-surface/80">24/7 by appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <BookingCalendar />
        </div>
      </div>
    </section>
  );
};

export default Contact;