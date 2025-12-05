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
        </DashboardLayout>
    );
};

export default Dashboard;
