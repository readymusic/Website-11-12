import React from 'react';
import { useAuthStore } from '../../store/authStore';
import { Music, FileText, MessageSquare, CreditCard, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-primary-dark">
      <nav className="bg-primary border-b border-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-surface font-bold text-xl">Client Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-surface/80">{user?.email}</span>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-surface/60 hover:text-accent transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-primary p-6 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Music className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-surface font-semibold">Active Projects</h3>
                <p className="text-2xl font-bold text-accent">3</p>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-surface font-semibold">Files</h3>
                <p className="text-2xl font-bold text-accent">12</p>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <MessageSquare className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-surface font-semibold">Messages</h3>
                <p className="text-2xl font-bold text-accent">5</p>
              </div>
            </div>
          </div>

          <div className="bg-primary p-6 rounded-xl">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-surface font-semibold">Invoices</h3>
                <p className="text-2xl font-bold text-accent">2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add more dashboard content here */}
      </main>
    </div>
  );
};

export default Dashboard;