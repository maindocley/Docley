import React from 'react';

const Header = () => {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-primary-600">Docley</span>
                </div>
                <nav className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-gray-900 font-medium">Dashboard</button>
                    <button className="text-gray-600 hover:text-gray-900 font-medium">Templates</button>
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                        A
                    </div>
                </nav>
            </div>
        </header>
    );
};

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;
