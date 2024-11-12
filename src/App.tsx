import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import PortalLogin from './components/Portal/PortalLogin';
import ProtectedRoute from './components/Portal/ProtectedRoute';
import Dashboard from './components/Portal/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface p-4 md:p-8">
        <div className="bg-primary min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-8rem)] relative rounded-xl overflow-hidden border-4 border-accent/30">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
          <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-accent/30 via-accent to-accent/30" />
          <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-accent/30 via-accent to-accent/30" />
          
          <Routes>
            <Route path="/portal/login" element={<PortalLogin />} />
            <Route
              path="/portal/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <main className="relative">
                  <Navigation />
                  <Hero />
                  <Services />
                  <About />
                  <Portfolio />
                  <Gallery />
                  <Testimonials />
                  <Blog />
                  <Contact />
                </main>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;