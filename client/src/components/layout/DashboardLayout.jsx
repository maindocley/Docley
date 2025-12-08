import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = ({ children }) => {
    const { user, signOut } = useAuth();
    const location = useLocation();
    const [showStore, setShowStore] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const isActive = (path) => {
        return location.pathname === path ? 'bg-sky-100 text-sky-700' : 'text-gray-600 hover:bg-gray-100';
    };

    // Provide overridable links to GPT tools. Replace with exact GPT URLs when available.
    const GPT_LINKS = {
        slideMaker: import.meta.env.VITE_GPT_SLIDE_MAKER_URL || 'https://chatgpt.com',
        docMaker: import.meta.env.VITE_GPT_DOC_MAKER_URL || 'https://chatgpt.com',
        sheetMaker: import.meta.env.VITE_GPT_SHEET_MAKER_URL || 'https://chatgpt.com',
        voiceGen: import.meta.env.VITE_GPT_VOICE_GEN_URL || 'https://chatgpt.com',
    };

    const gptTools = [
        {
            name: 'Slide Maker',
            description: 'Create PowerPoint presentations fast — perfect for professional and technical decks.',
            conversations: '1M+ Conversations',
            color: 'bg-amber-500',
            iconPath: 'M6 7h12M6 11h12M6 15h8',
            href: GPT_LINKS.slideMaker,
        },
        {
            name: 'Doc Maker',
            description: 'Generate reports, presentations, and spreadsheets in seconds with ChatGPT.',
            conversations: '200K+ Conversations',
            color: 'bg-sky-600',
            iconPath: 'M8 6h5l3 3v9a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z',
            href: GPT_LINKS.docMaker,
        },
        {
            name: 'Spreadsheet Maker',
            description: 'Prompt to create spreadsheets. Works with CSV, Excel, and more.',
            conversations: '100K+ Conversations',
            color: 'bg-emerald-600',
            iconPath: 'M6 7h12M6 11h12M6 15h12',
            href: GPT_LINKS.sheetMaker,
        },
        {
            name: 'AI Voice Generator',
            description: 'Generate high quality voiceovers that can be downloaded.',
            conversations: '300K+ Conversations',
            color: 'bg-rose-500',
            iconPath: 'M9 5v14m6-14v14M6 9v6m12-6v6',
            href: GPT_LINKS.voiceGen,
        }
    ];

    return (
        <div className="flex h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200/70 flex flex-col shadow-md">
                <div className="p-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-300/50">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Docley</span>
                    </div>
                </div>

                <div className="px-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-50 border border-sky-100 shadow-sm">
                        <div className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {user?.email?.[0].toUpperCase() || 'U'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-900 truncate">
                                {user?.user_metadata?.first_name || 'User'} {user?.user_metadata?.last_name || ''}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                        <button onClick={signOut} className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                        </button>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <Link to="/dashboard" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/dashboard')}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        Projects
                    </Link>
                    <Link to="/dashboard/drafts" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/dashboard/drafts')}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Drafts
                    </Link>
                    <Link to="/dashboard/resources" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/dashboard/resources')}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        Resources
                    </Link>
                    <Link to="/dashboard/trash" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/dashboard/trash')}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Trash
                    </Link>
                </nav>

                <div className="px-4 mb-4">
                    <div className="rounded-xl border border-sky-100 bg-white shadow-sm p-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.4 15c.37-.62.6-1.34.6-2.12 0-2.48-2.02-4.5-4.5-4.5-.51 0-1 .08-1.46.24C13.16 6.12 11.69 5 10 5 7.52 5 5.5 7.02 5.5 9.5c0 .44.06.87.18 1.27C4.01 11.11 3 12.43 3 14c0 1.93 1.57 3.5 3.5 3.5h11c1.1 0 2-.9 2-2 0-.66-.32-1.25-.82-1.64z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">ChatGPT - GPT Store</p>
                                <p className="text-xs text-gray-500">Productivity GPTs for your workspace.</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowStore(true)}
                            className="w-full py-2 text-sm font-semibold text-sky-700 bg-sky-100 hover:bg-sky-200 rounded-lg transition-colors"
                        >
                            Open GPT Store
                        </button>
                    </div>
                </div>

                <div className="p-4 border-t border-gray-200/70">
                    <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
                        <h4 className="text-sm font-semibold text-sky-900 mb-1">Send Feedback</h4>
                        <p className="text-xs text-sky-700 mb-3">Help us improve Docley with your suggestions!</p>
                        <button className="w-full py-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-medium rounded-lg transition-colors shadow-sm">
                            Send Feedback
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-gray-200/70 flex items-center justify-between px-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        <Link to="/editor">
                            <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white gap-2 shadow-md shadow-sky-400/40">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                New Document
                            </Button>
                        </Link>
                        <div className="h-8 w-px bg-gray-200/70 mx-2"></div>
                        <div className="flex items-center gap-2 text-gray-600 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <span className="text-sm font-medium">Project name</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 relative">
                        <div className="relative">
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search documents..."
                                className="pl-10 pr-4 py-2 w-64 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 shadow-sm"
                            />
                        </div>

                        {/* Settings dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSettings((v) => !v)}
                                className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 shadow-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.607 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            {showSettings && (
                                <div className="absolute right-0 mt-2 w-52 rounded-xl border border-gray-100 bg-white shadow-xl z-20 overflow-hidden">
                                    <Link
                                        to="/pricing"
                                        className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-sky-50"
                                        onClick={() => setShowSettings(false)}
                                    >
                                        <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v7h6v-7c0-1.657-1.343-3-3-3z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11V7a3 3 0 116 0v4" />
                                        </svg>
                                        Upgrade plan
                                    </Link>
                                    <button
                                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-sky-50 text-left"
                                        onClick={() => setShowSettings(false)}
                                    >
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364-6.364l.707.707M6.636 17.364l-.707.707m0-12.728l.707.707M17.364 17.364l.707.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Dark mode (coming soon)
                                    </button>
                                    <button
                                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-sky-50 text-left"
                                        onClick={() => setShowSettings(false)}
                                    >
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Help center
                                    </button>
                                    <button
                                        className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 text-left"
                                        onClick={() => { setShowSettings(false); signOut(); }}
                                    >
                                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                        Log out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-8">
                    {children}
                </div>
            </main>

            {/* GPT Store Overlay */}
            {showStore && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm px-4 py-10">
                    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">ChatGPT - GPT Store</h3>
                                <p className="text-sm text-gray-600">Use our suite of productivity GPTs to speed up your workflow.</p>
                            </div>
                            <button
                                onClick={() => setShowStore(false)}
                                className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 p-6">
                            {gptTools.map((tool) => (
                                <a
                                    key={tool.name}
                                    href={tool.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center text-white`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={tool.iconPath} />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-lg font-semibold text-gray-900">{tool.name}</h4>
                                            <span className="text-xs text-gray-500">{tool.conversations}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardLayout;
