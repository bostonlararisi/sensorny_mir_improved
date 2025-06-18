import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { coursesData } from '../data/siteData';
import { User, Mail, Calendar, Award, BookOpen, CheckCircle, Settings, LogOut } from 'lucide-react';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { user, logout, getCourseProgress } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Необходима авторизация
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Пожалуйста, войдите в систему для просмотра профиля
          </p>
        </div>
      </div>
    );
  }

  const totalLessons = coursesData.reduce((total, course) => total + course.lessons.length, 0);
  const completedLessons = coursesData.reduce((total, course) => {
    const progress = getCourseProgress(course.id);
    return total + progress.completed;
  }, 0);

  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {user.email}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center mt-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Зарегистрирован: {new Date(user.createdAt).toLocaleDateString('ru-RU')}
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Выйти</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Обзор
              </button>
              <button
                onClick={() => setActiveTab('progress')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'progress'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Прогресс
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'settings'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Настройки
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Всего уроков
                        </p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                          {totalLessons}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                          Завершено
                        </p>
                        <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                          {completedLessons}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <div className="flex items-center">
                      <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          Прогресс
                        </p>
                        <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                          {completionPercentage}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Общий прогресс обучения
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {completedLessons} из {totalLessons}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Прогресс по курсам
                </h3>
                <div className="space-y-4">
                  {coursesData.map((course) => {
                    const progress = getCourseProgress(course.id);
                    const percentage = course.lessons.length > 0 
                      ? Math.round((progress.completed / course.lessons.length) * 100) 
                      : 0;

                    return (
                      <div key={course.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {course.title}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {progress.completed} из {course.lessons.length}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-green-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {percentage}% завершено
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Настройки аккаунта
                </h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Информация профиля
                    </h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p><strong>Имя:</strong> {user.name}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <p><strong>Роль:</strong> {user.role === 'admin' ? 'Администратор' : 'Пользователь'}</p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Действия
                    </h4>
                    <div className="space-y-2">
                      <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm">
                        Изменить пароль
                      </button>
                      <br />
                      <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 text-sm">
                        Удалить аккаунт
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

