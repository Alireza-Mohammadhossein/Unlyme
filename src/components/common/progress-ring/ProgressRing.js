import React from 'react';
import './progressRing.scss';

const ProgressRing = ({ radius, stroke = 4, progress, innerContent }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-ring__container">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="progress-ring__base"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDashoffset="100%"
        />
        <circle
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: '1s' }}
          strokeWidth={stroke}
          r={normalizedRadius}
          className="progress-ring__main"
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="progress-ring__inner">{innerContent}</div>
    </div>
  );
};

export default ProgressRing;
