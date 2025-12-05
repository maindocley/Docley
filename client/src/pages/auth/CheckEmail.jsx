import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../../components/ui/GlassCard';
import Button from '../../components/ui/Button';

const CheckEmail = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <GlassCard className="w-full max-w-[480px] p-10 bg-white/80 backdrop-blur-xl border-white/50 shadow-xl text-center">
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
                <p className="text-gray-600 mb-8">
                    We've sent a verification link to your email address. Please click the link to verify your account.
                </p>

                <div className="space-y-4">
                    <Link to="/login">
                        <Button className="w-full bg-primary-600 hover:bg-primary-700">
                            Back to Login
                        </Button>
                    </Link>

                    <div className="text-sm text-gray-500">
                        Didn't receive the email? <span className="text-primary-600 cursor-pointer hover:underline">Click to resend</span>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
};

export default CheckEmail;
