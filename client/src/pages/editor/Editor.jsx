import React, { useState } from 'react';
import EditorLayout from '../../components/layout/EditorLayout';
import GeneratorModal from '../../components/editor/GeneratorModal';

const Editor = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <EditorLayout>
            <div className="h-full w-full bg-white flex items-center justify-center text-gray-400">
                {/* Placeholder for the actual editor content */}
                <p>Editor Workspace</p>
            </div>

            <GeneratorModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </EditorLayout>
    );
};

export default Editor;
