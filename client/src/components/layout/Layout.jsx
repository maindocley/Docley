import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Docley</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</a>
                    <a href="#templates" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Templates</a>
                    <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</a>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
                        Sign In
                    </Link>
                    <Link to="/register">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
