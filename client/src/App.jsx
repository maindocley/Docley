import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Button from './components/ui/Button';
import Input from './components/ui/Input';
import Card from './components/ui/Card';
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
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Welcome to Docley</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Your AI-powered document assistant. Create reports, summaries, and presentations in seconds.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <Button size="lg" className="bg-primary-600 hover:bg-primary-500 text-white border-none">Get Started</Button>
          </Link>
          <Button variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">Learn More</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <Card className="bg-glass-100 border-glass-border backdrop-blur-lg text-white">
          <Card.Header className="border-glass-border">
            <Card.Title className="text-white">AI Report Generation</Card.Title>
          </Card.Header>
          <Card.Content>
            Generate comprehensive business reports and research papers with advanced AI analysis.
          </Card.Content>
          <Card.Footer className="bg-transparent border-glass-border">
            <Button variant="ghost" size="sm" className="px-0 text-primary-300 hover:text-primary-200 hover:bg-transparent">Try it now &rarr;</Button>
          </Card.Footer>
        </Card>

        <Card className="bg-glass-100 border-glass-border backdrop-blur-lg text-white">
          <Card.Header className="border-glass-border">
            <Card.Title className="text-white">Document Summarization</Card.Title>
          </Card.Header>
          <Card.Content>
            Instantly summarize long documents into concise, actionable insights.
          </Card.Content>
          <Card.Footer className="bg-transparent border-glass-border">
            <Button variant="ghost" size="sm" className="px-0 text-primary-300 hover:text-primary-200 hover:bg-transparent">Try it now &rarr;</Button>
          </Card.Footer>
        </Card>

        <Card className="bg-glass-100 border-glass-border backdrop-blur-lg text-white">
          <Card.Header className="border-glass-border">
            <Card.Title className="text-white">Presentation Builder</Card.Title>
          </Card.Header>
          <Card.Content>
            Turn your text into professional slide decks with AI-generated images and layouts.
          </Card.Content>
          <Card.Footer className="bg-transparent border-glass-border">
            <Button variant="ghost" size="sm" className="px-0 text-primary-300 hover:text-primary-200 hover:bg-transparent">Try it now &rarr;</Button>
          </Card.Footer>
        </Card>
      </section>

      <section className="max-w-md mx-auto">
        <Card className="bg-glass-100 border-glass-border backdrop-blur-lg text-white">
          <Card.Content className="space-y-4">
            <h3 className="text-lg font-semibold">Join the Waitlist</h3>
            <Input
              label="Email Address"
              placeholder="you@example.com"
              className="bg-glass-100 border-glass-border text-white placeholder-gray-400 focus:border-primary-400 focus:ring-primary-400/20"
            />
            <Button className="w-full bg-primary-600 hover:bg-primary-500 border-none">Subscribe</Button>
          </Card.Content>
        </Card>
      </section>
    </div>
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
