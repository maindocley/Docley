import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'annually'
  const [userType, setUserType] = useState('casual'); // 'casual' or 'professional'

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      duration: 'Forever',
      icon: null,
      badge: null,
      features: [
        'Unlimited files (Documents, Presentations, Spreadsheets)',
        'Unlimited AI messages (ChatGPT, Claude, and Gemini)',
        'Upload files (max 100 pages)',
        'Documents, Presentations, Spreadsheets: Generate up to 2500 words per file',
        'Voiceovers: 60,000 Characters per month (~60 mins audio)',
        'Attribution required for commercial use (see details)',
        'GPT Store: Doc Maker, Slide Maker, Spreadsheet Maker, AI Voice Generator, and more'
      ],
      cta: 'Get Started for Free!',
      ctaVariant: 'primary',
      currentPlan: true,
      trial: false
    },
    {
      name: 'Standard',
      price: billingCycle === 'monthly' ? '$7' : '$70',
      duration: billingCycle === 'monthly' ? 'Monthly' : 'Annually',
      icon: '⚡',
      badge: null,
      features: [
        'Higher AI intelligence (ChatGPT 5, Claude Sonnet 4)',
        'Unlimited files',
        'Unlimited AI messages',
        'Upload files (max 500 pages)',
        'Enhanced Auto Mode',
        '300 Premium credits per month',
        'Documents, Presentations, Spreadsheets: Generate up to 5000 words per file',
        'Voiceovers: 200,000 Characters per month (~200 mins audio)',
        'Unlock Standard AI voices',
        'No attribution required'
      ],
      cta: 'Try for Free',
      ctaVariant: 'primary',
      currentPlan: false,
      trial: true
    },
    {
      name: 'Premium',
      price: billingCycle === 'monthly' ? '$12' : '$120',
      duration: billingCycle === 'monthly' ? 'Monthly' : 'Annually',
      icon: '⭐',
      badge: 'RECOMMENDED',
      features: [
        'Max Intelligence AI (ChatGPT 5, Claude Sonnet 4, Gemini 2.5 Pro, Claude Opus 4.1)',
        'Higher quality AI responses (Larger context windows, thinking budget, and other upgrades)',
        'Priority access to servers, faster response times',
        'Upload files (max 2500 pages)',
        '500 Premium credits per month',
        'Everything in Standard',
        'Documents, Presentations, Spreadsheets: Generate up to 10000 words per file',
        'Voiceovers: 400,000 Characters per month (~400 mins audio)',
        'Unlock Premium AI voices',
        'License for commercial use'
      ],
      cta: 'Try for Free',
      ctaVariant: 'primary',
      currentPlan: false,
      trial: true
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Start free, upgrade anytime.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex flex-col items-center gap-6 mb-12">
            {/* Billing Cycle Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">Billing Frequency:</span>
              <div className="flex bg-white border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle('annually')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    billingCycle === 'annually'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Annually
                  {billingCycle === 'annually' && (
                    <span className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                      Save -15%
                    </span>
                  )}
                </button>
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    billingCycle === 'monthly'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* User Type Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-700">User Type:</span>
              <div className="flex bg-white border border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setUserType('casual')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    userType === 'casual'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Casual
                </button>
                <button
                  onClick={() => setUserType('professional')}
                  className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    userType === 'professional'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Professional
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative ${
                  plan.badge === 'RECOMMENDED'
                    ? 'md:-mt-4 md:mb-4'
                    : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <Card
                  className={`h-full p-8 flex flex-col ${
                    plan.badge === 'RECOMMENDED'
                      ? 'border-2 border-purple-500 shadow-2xl'
                      : 'border border-gray-200 hover:border-orange-300 hover:shadow-xl'
                  } transition-all`}
                >
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    {plan.icon && (
                      <span className="text-3xl">{plan.icon}</span>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      {plan.price === 'Free' ? (
                        <span className="text-4xl font-bold text-gray-900">Free</span>
                      ) : (
                        <>
                          <span className="text-2xl text-gray-600">USD</span>
                          <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-600 mt-1">{plan.duration}</p>
                  </div>

                  {/* Trial Notice */}
                  {plan.trial && (
                    <div className="mb-6 flex items-center gap-2 text-green-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">Start 7-Day Free Trial - Cancel Anytime</span>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link to={plan.price === 'Free' ? '/register' : '/register'} className="mb-6">
                    <Button
                      className={`w-full ${
                        plan.badge === 'RECOMMENDED'
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      } py-3 font-semibold`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>

                  {plan.currentPlan && (
                    <button className="w-full py-2 text-sm text-gray-600 bg-gray-100 rounded-lg font-medium mb-6">
                      Current Plan
                    </button>
                  )}

                  {/* Features List */}
                  <div className="flex-1 space-y-3">
                    {plan.features.map((feature, idx) => {
                      // Check if feature contains "(see details)" and make it a link
                      const hasLink = feature.includes('(see details)');
                      const parts = hasLink ? feature.split('(see details)') : [feature];
                      
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {parts[0]}
                            {hasLink && (
                              <a href="#" className="text-blue-600 hover:underline ml-1">
                                (see details)
                              </a>
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Security Notice */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 text-gray-600">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium">Pay Safe and Secure</span>
              <span className="text-xs text-gray-500">Powered by</span>
              <span className="text-sm font-bold text-gray-700">stripe</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;

