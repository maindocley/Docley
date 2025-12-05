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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
      </div>

      <GlassCard className="w-full max-w-[480px] p-10 bg-white/80 backdrop-blur-xl border-white/50 shadow-xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
              id="firstName"
              label="First Name"
              placeholder="Your first name"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
              required
            />
            <Input
              id="lastName"
              label="Last Name"
              placeholder="Your last name"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
              required
            />
          </div>

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
            required
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter a password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
            required
          />

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 text-lg bg-primary-500/90 hover:bg-primary-500 backdrop-blur-md shadow-lg shadow-primary-500/30 border border-white/20 transition-all hover:scale-[1.02]"
          >
            {loading ? 'Creating Account...' : 'Continue'}
          </Button>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-gray-400 text-sm uppercase">Or</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button
            type="button"
            className="w-full h-12 flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
            Sign In
          </Link>
        </div>
      </GlassCard>
    </div>
  );
};

export default Register;

