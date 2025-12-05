import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';

const ForgotPassword = () => {
    const { resetPasswordForEmail } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        setLoading(true);

        try {
            const { error } = await resetPasswordForEmail(email);
            if (error) throw error;

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Forgot Password</h1>
                <p className="text-gray-600 mt-2">Enter your email to receive a reset link</p>
            </div>

            <GlassCard className="w-full max-w-[480px] p-10 bg-white/80 backdrop-blur-xl border-white/50 shadow-xl">
                {success ? (
                    <div className="text-center space-y-4">
                        <div className="p-4 text-sm text-green-600 bg-green-50 border border-green-200 rounded-lg">
                            Check your email! We've sent you a password reset link.
                        </div>
                        <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                            Back to Login
                        </Link>
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                                {error}
                            </div>
                        )}

                        <Input
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
                            required
                        />

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full h-12 text-lg bg-primary-500/90 hover:bg-primary-500 backdrop-blur-md shadow-lg shadow-primary-500/30 border border-white/20 transition-all hover:scale-[1.02]"
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </Button>

                        <div className="text-center text-gray-500">
                            Remember your password?{' '}
                            <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                                Sign In
                            </Link>
                        </div>
                    </form>
                )}
            </GlassCard>
        </div>
    );
};

export default ForgotPassword;
