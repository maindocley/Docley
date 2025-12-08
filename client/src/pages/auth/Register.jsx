import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error } = await signUp(formData.email.trim(), formData.password, {
        first_name: formData.firstName,
        last_name: formData.lastName,
      }, {
        emailRedirectTo: `${window.location.origin}/dashboard`
      });

      if (error) throw error;

      navigate('/check-email');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 flex items-center justify-center p-6">
      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15c.37-.62.6-1.34.6-2.12 0-2.48-2.02-4.5-4.5-4.5-.51 0-1 .08-1.46.24C13.16 6.12 11.69 5 10 5 7.52 5 5.5 7.02 5.5 9.5c0 .44.06.87.18 1.27C4.01 11.11 3 12.43 3 14c0 1.93 1.57 3.5 3.5 3.5h11c1.1 0 2-.9 2-2 0-.66-.32-1.25-.82-1.64z" />
            </svg>
            Create your Docley account
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Start creating with AI-powered docs
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Join thousands of teams using Docley to generate documents, slides, and spreadsheets in minutes.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Free forever plan
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              Upgrade anytime
            </span>
          </div>
        </div>

        <GlassCard className="w-full p-10 bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Create your account</h2>
            <p className="text-sm text-gray-500 mt-1">It only takes a minute to get started.</p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                id="firstName"
                label="First Name"
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleChange}
                className="bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-sky-200 transition-all"
                required
              />
              <Input
                id="lastName"
                label="Last Name"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                className="bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-sky-200 transition-all"
                required
              />
            </div>

            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-sky-200 transition-all"
              required
            />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:ring-sky-200 transition-all"
              required
            />

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-lg bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-500/30 border border-sky-600 transition-all hover:translate-y-[-1px]"
            >
              {loading ? 'Creating account...' : 'Continue'}
            </Button>

            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm uppercase">or</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <button
              type="button"
              className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Continue with Google
            </button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-sky-600 hover:text-sky-700 font-semibold">
              Sign In
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Register;

