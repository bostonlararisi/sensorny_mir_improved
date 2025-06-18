import React from 'react';
import { useTranslation } from 'react-i18next';

const LoadingSpinner = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-calm">
      <div className="text-center">
        <div className="relative">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          
          {/* Progress bar */}
          <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto mb-4">
            <div className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <p className="text-lg font-medium text-high-contrast mb-2">
          {t('loading')}
        </p>
        
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Подготавливаем материалы для вас...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;

