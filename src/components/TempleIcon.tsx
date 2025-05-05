import React from 'react';

const TempleIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M17 21v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2"></path>
      <path d="M12 3L2 10h20L12 3z"></path>
      <path d="M9 21v-8h1"></path>
      <path d="M14 21v-8h1"></path>
      <path d="M12 3v18"></path>
      <path d="M6 10v11"></path>
      <path d="M18 10v11"></path>
    </svg>
  );
};

export default TempleIcon;