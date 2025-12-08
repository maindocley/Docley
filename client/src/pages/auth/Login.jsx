import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { signIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
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
            const { error } = await signIn(formData.email.trim(), formData.password);
            if (error) throw error;

            navigate('/dashboard');
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Secure workspace login
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Welcome back to Docley
                    </h1>
                    <p className="text-lg text-gray-600 max-w-xl">
                        Sign in to continue creating and managing your documents with our AI-powered suite.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            SSO ready
                        </span>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-gray-200">
                            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                            2FA supported
                        </span>
                    </div>
                </div>

                <GlassCard className="w-full p-10 bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl">
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Sign in</h2>
                        <p className="text-sm text-gray-500 mt-1">Use your email and password to access your account.</p>
                    </div>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                                {error}
                            </div>
                        )}

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

                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2 text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Secure & encrypted
                            </div>
                            <Link to="/forgot-password" className="text-sky-600 hover:text-sky-700 font-medium">
                                Forgot password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 text-lg bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-500/30 border border-sky-600 transition-all hover:translate-y-[-1px]"
                        >
                            {loading ? 'Signing in...' : 'Continue'}
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
                        New to Docley?{' '}
                        <Link to="/register" className="text-sky-600 hover:text-sky-700 font-semibold">
                            Create an account
                        </Link>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default Login;
