import React, { useState } from 'react';
import DashboardLayout from '../../components/layout/DashboardLayout';
import ProjectCard from '../../components/dashboard/ProjectCard';

const Dashboard = () => {
    // Mock data - replace with real data from Supabase later
    const [projects, setProjects] = useState([
        { id: 1, name: 'Name of project', type: 'Document type', lastVisited: '5 min ago', starred: true },
        { id: 2, name: 'Name of project', type: 'Document type', lastVisited: '5 min ago', starred: true },
        { id: 3, name: 'Name of project', type: 'Document type', lastVisited: '5 min ago', starred: true },
    ]);

    const handleDelete = (id) => {
        console.log('Delete project', id);
        // Implement delete logic
    };

    const handleDuplicate = (id) => {
        console.log('Duplicate project', id);
        // Implement duplicate logic
    };

    const handleRename = (id) => {
        console.log('Rename project', id);
        // Implement rename logic
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Your workspace</h1>
                        <p className="text-gray-600">Access recent projects, drafts, and resources.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 text-sm font-semibold text-sky-700 bg-sky-100 rounded-lg hover:bg-sky-200 transition-colors">
                            Filter
                        </button>
                        <button className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                            Sort
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDelete={handleDelete}
                            onDuplicate={handleDuplicate}
                            onRename={handleRename}
                        />
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
