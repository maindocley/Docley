import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Card from './components/ui/Card';
import GlassCard from './components/ui/GlassCard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import CheckEmail from './pages/auth/CheckEmail';
import Dashboard from './pages/dashboard/Dashboard';
import Editor from './pages/editor/Editor';
import ProtectedRoute from './components/auth/ProtectedRoute';

const Home = () => (
  <Layout>
    {/* Hero Section */}
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4">
          <span className="px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
            AI-Powered Document Generation
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Create Documents &<br />Presentations in Seconds
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Let AI handle the heavy lifting. Generate professional reports, presentations, and content from your ideas, files, or conversations.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link to="/register">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-orange-500/30">
              Start Creating Free
            </Button>
          </Link>
          <Button variant="secondary" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:border-gray-400 flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 001.7 1.269l9.344-1.89A1.5 1.5 0 0016 14.11V2.89a1.5 1.5 0 00-1.7-1.269L4.956 2.841z" />
            </svg>
            Watch Demo
          </Button>
        </div>

        {/* Three Glass Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <GlassCard className="bg-white/80 backdrop-blur-xl border border-white/50 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documents</h3>
            <p className="text-gray-600">Reports & Docs</p>
          </GlassCard>

          <GlassCard className="bg-white/80 backdrop-blur-xl border border-white/50 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2H19a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Presentations</h3>
            <p className="text-gray-600">Slides & Decks</p>
          </GlassCard>

          <GlassCard className="bg-white/80 backdrop-blur-xl border border-white/50 p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Assistant</h3>
            <p className="text-gray-600">Smart Chat</p>
          </GlassCard>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Everything You Need to Create Faster
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            { icon: 'document', title: 'Document Generation', desc: 'Create full reports, articles, and documents from simple prompts or outlines using AI.' },
            { icon: 'presentation', title: 'Presentation Builder', desc: 'Turn content into polished PowerPoint slides with professional layouts automatically.' },
            { icon: 'upload', title: 'Smart File Upload', desc: 'Upload PDFs, DOCX, images, or audio files and let AI extract and process information.' },
            { icon: 'chat', title: 'AI Chat Assistant', desc: 'Refine, summarize, rewrite, or expand your content through natural conversation.' },
            { icon: 'folder', title: 'Project Library', desc: 'Organize all your generated documents in one place for easy access and editing.' },
            { icon: 'download', title: 'Multiple Formats', desc: 'Export your work as PDF, DOCX, or PPTX files ready for sharing or presentation.' },
          ].map((feature, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon === 'document' && (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                {feature.icon === 'presentation' && (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2H19a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                )}
                {feature.icon === 'upload' && (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )}
                {feature.icon === 'chat' && (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {feature.icon === 'folder' && (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                )}
                {feature.icon === 'download' && (
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </Card>
          ))}
        </div>

        <p className="text-center text-gray-600 font-medium">Plus many more AI-powered features.</p>
      </div>
    </section>

    {/* Templates Section */}
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Templates</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Start with Professional Templates
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Choose from our library of AI-optimized templates for any use case.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { name: 'Business Report', desc: 'Professional quarterly and annual reports.', popular: true },
            { name: 'Pitch Deck', desc: 'Investor-ready startup presentations.', popular: true },
            { name: 'Research Paper', desc: 'Academic papers with citations.', popular: false },
            { name: 'Marketing Plan', desc: 'Comprehensive marketing strategies.', popular: false },
            { name: 'Training Manual', desc: 'Employee onboarding guides.', popular: false },
            { name: 'Project Proposal', desc: 'Detailed project proposals.', popular: true },
          ].map((template, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow relative">
              {template.popular && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                  Popular
                </span>
              )}
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                {idx % 2 === 0 ? (
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2H19a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
              <p className="text-gray-600 mb-4">{template.desc}</p>
              <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0 font-semibold flex items-center gap-1">
                Use Template
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" className="px-8 py-3 border-2 border-gray-300 hover:border-gray-400">
            View All Templates
          </Button>
        </div>
      </div>
    </section>

    {/* Final CTA Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Transform How You Create Content?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of professionals using Docley to generate documents and presentations in minutes, not hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link to="/register">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-orange-500/30">
              Start Creating Free
            </Button>
          </Link>
          <a href="#pricing">
            <Button variant="secondary" size="lg" className="px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:border-gray-400">
              View Pricing
            </Button>
          </a>
        </div>
        <p className="text-sm text-gray-500">No credit card required - Free forever plan available.</p>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-white border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Docley</span>
            </div>
            <p className="text-gray-600 text-sm">AI-powered document and presentation generation.</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Features</a></li>
              <li><a href="#templates" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Templates</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</a></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">© 2025 Docley. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </Layout>
);

import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editor/*"
            element={
              <ProtectedRoute>
                <Editor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
