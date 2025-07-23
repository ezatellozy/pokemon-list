import React from 'react';

interface NotFoundProps {
  title?: string;
  message?: string;
  className?: string;
}

const NotFound: React.FC<NotFoundProps> = ({
  title = 'No Data Found',
  message = 'There are no items to display at this time.',
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <svg
        className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-lg font-medium text-gray-800 dark:text-white/90 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {message}
      </p>
    </div>
  );
};

export default NotFound; 