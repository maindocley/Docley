import React, { useState, useRef, useEffect } from 'react';

const ProjectCard = ({ project, onDelete, onDuplicate, onRename }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all border border-gray-100 group relative">
            {/* Preview Area */}
            <div className="aspect-[4/3] bg-gradient-to-br from-sky-50 to-indigo-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative border border-gray-100">
                {project.preview ? (
                    <img src={project.preview} alt={project.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-gray-400 text-sm font-medium">Document preview</div>
                )}
            </div>

            {/* Content */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1 truncate max-w-[180px]">{project.name}</h3>
                    <p className="text-xs text-gray-500">{project.type}</p>
                </div>

                <div className="flex items-center gap-1">
                    {project.starred && (
                        <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    )}

                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="p-1 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>

                        {showMenu && (
                            <div className="absolute right-0 top-8 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1 z-10 animate-in fade-in zoom-in-95 duration-100">
                                <button
                                    onClick={() => { onRename(project.id); setShowMenu(false); }}
                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-sky-50 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit name
                                </button>
                                <button
                                    onClick={() => { onDuplicate(project.id); setShowMenu(false); }}
                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-sky-50 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Duplicate
                                </button>
                                <button
                                    onClick={() => { onDelete(project.id); setShowMenu(false); }}
                                    className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                >
                                    <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-3 text-xs text-gray-500 text-right">
                visited ({project.lastVisited})
            </div>
        </div>
    );
};

export default ProjectCard;
