import React from 'react';

const GlassCard = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`
        backdrop-blur-xl bg-glass-100 border border-glass-border 
        rounded-2xl shadow-2xl 
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default GlassCard;
