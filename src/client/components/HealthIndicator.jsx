import React from 'react';
import './HealthIndicator.css';

export default function HealthIndicator({ status }) {
  if (!status) {
    return <div className="health-indicator empty">-</div>;
  }

  const getStatusClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'green':
        return 'green';
      case 'yellow':
        return 'yellow';
      case 'red':
        return 'red';
      default:
        return 'empty';
    }
  };

  return (
    <div className={`health-indicator ${getStatusClass(status)}`}>
      {status}
    </div>
  );
}