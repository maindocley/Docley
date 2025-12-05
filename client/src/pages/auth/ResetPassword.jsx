import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { useAuth } from '../../context/AuthContext';

const ResetPassword = () => {
    const navigate = useNavigate();
    const { updatePassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        try {
            const { error } = await updatePassword(formData.password);
            if (error) throw error;

            navigate('/login');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
                <p className="text-gray-600 mt-2">Enter your new password</p>
            </div>

            <GlassCard className="w-full max-w-[480px] p-10 bg-white/80 backdrop-blur-xl border-white/50 shadow-xl">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                            {error}
                        </div>
                    )}

                    <Input
                        id="password"
                        label="New Password"
                        type="password"
                        placeholder="Enter new password"
                        value={formData.password}
                        onChange={handleChange}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
                        required
                    />

                    <Input
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm new password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:bg-white transition-all"
                        required
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full h-12 text-lg bg-primary-500/90 hover:bg-primary-500 backdrop-blur-md shadow-lg shadow-primary-500/30 border border-white/20 transition-all hover:scale-[1.02]"
                    >
                        {loading ? 'Updating...' : 'Update Password'}
                    </Button>
                </form>
            </GlassCard>
        </div>
    );
};

export default ResetPassword;
