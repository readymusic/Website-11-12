import React, { useState } from 'react';
import { LogIn, Lock, Mail, AlertCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const PortalLogin = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(credentials.email, credentials.password);
      // Redirect to dashboard on success
      window.location.href = '/portal/dashboard';
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-dark p-4">
      <div className="max-w-md w-full bg-primary rounded-xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-surface mb-2">Client Portal</h2>
          <p className="text-surface/60">Access your projects and files</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg flex items-center space-x-2 text-accent">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-surface/80 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-surface/40" />
              <input
                type="email"
                id="email"
                required
                className="pl-10 w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:ring-0 text-surface"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-surface/80 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-surface/40" />
              <input
                type="password"
                id="password"
                required
                className="pl-10 w-full rounded-lg bg-primary-dark border-transparent focus:border-accent focus:ring-0 text-surface"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 bg-accent hover:bg-accent-dark text-primary px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <LogIn className="h-5 w-5" />
            <span>{isLoading ? 'Signing in...' : 'Sign In'}</span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-accent hover:text-accent-light text-sm">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortalLogin;