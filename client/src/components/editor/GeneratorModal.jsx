import React, { useState } from 'react';
import Button from '../ui/Button';

const GeneratorModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('GENERATE');
    const [toggles, setToggles] = useState({
        tone1: false,
        tone2: false,
        tone3: false,
        tone4: false
    });

    if (!isOpen) return null;

    const toggleSwitch = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Docley</h2>
                    <div className="flex gap-6 mt-4">
                        {['GENERATE', 'REFINE', 'TRANSLATE'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm font-semibold pb-2 border-b-2 transition-colors ${activeTab === tab
                                        ? 'text-primary-600 border-primary-600'
                                        : 'text-gray-400 border-transparent hover:text-gray-600'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-1/3 bg-gray-50 p-4 border-r border-gray-100 flex flex-col">
                        <h3 className="font-semibold text-gray-900 mb-3">AI Prompt Library</h3>
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Enter document name..."
                                className="w-full pl-3 pr-3 py-2 bg-white border border-primary-500 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                            />
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {/* Placeholder for prompts list */}
                        </div>
                    </div>

                    {/* Main Form */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Describe the project:
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">
                                    Additional instructions:
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                                />
                            </div>

                            <div className="space-y-4 pt-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center justify-between py-1">
                                        <span className="text-sm font-medium text-gray-700">Tone and Style</span>
                                        <button
                                            onClick={() => toggleSwitch(`tone${i}`)}
                                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${toggles[`tone${i}`] ? 'bg-gray-600' : 'bg-gray-200'
                                                }`}
                                        >
                                            <span
                                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggles[`tone${i}`] ? 'translate-x-6' : 'translate-x-1'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                    <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-lg font-medium shadow-lg shadow-primary-500/30">
                        Generate
                    </Button>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="absolute bottom-8 right-8 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium shadow-xl flex items-center gap-2 transition-transform hover:scale-105">
                Generate power point
            </button>
        </div>
    );
};

export default GeneratorModal;
