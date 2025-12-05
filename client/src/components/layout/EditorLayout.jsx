import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const EditorLayout = ({ children }) => {
    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Top Bar */}
            <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Link to="/dashboard" className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </Link>

                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">Untitled-project</span>
                        <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <Button size="sm" className="bg-primary-600 hover:bg-primary-700 text-white px-6">
                    Export
                </Button>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-hidden relative">
                {children}
            </main>
        </div>
    );
};

export default EditorLayout;
