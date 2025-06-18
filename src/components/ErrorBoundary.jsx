import React from 'react';
import { useTranslation } from 'react-i18next';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-calm">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-600 text-2xl">⚠️</span>
        </div>
        
        <h1 className="text-2xl font-bold text-high-contrast mb-4">
          {t('error_title')}
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {t('error_message')}
        </p>
        
        <div className="space-y-3">
          <button
            onClick={resetErrorBoundary}
            className="btn-primary w-full"
          >
            {t('try_again')}
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="btn-secondary w-full"
          >
            {t('go_home')}
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">
              Детали ошибки (только в режиме разработки)
            </summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 dark:bg-red-900 p-2 rounded overflow-auto">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default ErrorFallback;

