import React from 'react';
import { useTranslation } from 'react-i18next';

const ProgressBar = ({ current, total, label, showPercentage = true, className = '' }) => {
  const { t } = useTranslation();
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className={`mb-6 ${className}`}>
      {label && (
        <div className="flex justify-between text-sm mb-2 text-gray-600 dark:text-gray-400">
          <span className="font-medium">{label}</span>
          <span>
            {current} из {total}
            {showPercentage && ` (${percentage}%)`}
          </span>
        </div>
      )}
      <div className="progress-bar">
        <div 
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={label || t('progress')}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

