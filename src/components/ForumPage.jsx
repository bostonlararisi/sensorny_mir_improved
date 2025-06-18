import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Users, Plus } from 'lucide-react';

const ForumPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Форум сообщества
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Место для общения родителей, обмена опытом и взаимной поддержки в воспитании детей с особыми потребностями
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Скоро здесь будет форум!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Мы работаем над созданием безопасного и поддерживающего пространства для общения. 
              Форум будет включать:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Тематические разделы
                </h3>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• ABA-терапия</li>
                  <li>• PECS и коммуникация</li>
                  <li>• Сенсорная интеграция</li>
                  <li>• Поведенческие вопросы</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Возможности
                </h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Вопросы и ответы</li>
                  <li>• Истории успеха</li>
                  <li>• Поиск специалистов</li>
                  <li>• Региональные группы</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Уведомить о запуске
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Мы сообщим вам, когда форум будет готов
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;

