import React from 'react';

interface SectionDividerProps {
  position: 'left' | 'right';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ position }) => {
  return (
    <div className="flex-shrink-0">
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={position === 'left' ? 'rotate-0' : 'rotate-180'}
      >
        <path
          d="M0 12C0 5.373 5.373 0 12 0H40V24H12C5.373 24 0 18.627 0 12Z"
          fill="#CC4522"
        />
        <circle cx="16" cy="7" r="2" fill="white" />
        <circle cx="22" cy="7" r="2" fill="white" />
        <circle cx="28" cy="7" r="2" fill="white" />
        <circle cx="34" cy="7" r="2" fill="white" />
        <circle cx="16" cy="17" r="2" fill="white" />
        <circle cx="22" cy="17" r="2" fill="white" />
        <circle cx="28" cy="17" r="2" fill="white" />
        <circle cx="34" cy="17" r="2" fill="white" />
        <circle cx="16" cy="12" r="3" fill="white" />
        <circle cx="25" cy="12" r="3" fill="white" />
        <circle cx="34" cy="12" r="3" fill="white" />
      </svg>
    </div>
  );
};

export default SectionDivider;