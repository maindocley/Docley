import React from 'react';

const Card = ({ children, className = '', ...props }) => {
    return (
        <div
            className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

const CardHeader = ({ children, className = '' }) => (
    <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
        {children}
    </div>
);

const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
        {children}
    </h3>
);

const CardContent = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

const CardFooter = ({ children, className = '' }) => (
    <div className={`px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl ${className}`}>
        {children}
    </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
