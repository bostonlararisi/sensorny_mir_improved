import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';
import { coursesData } from '../data/siteData';
import { 
  Settings, 
  Users, 
  BookOpen, 
  Image, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Download,
  Upload
} from 'lucide-react';

const AdminPage = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const mockStats = {
    totalUsers: 1247,
    activeCourses: coursesData.length,
    totalLessons: coursesData.reduce((total, course) => total + course.lessons.length, 0),
    pecsCards: 18,
    completedLessons: 3456,
    avgProgress: 67
  };

  const mockUsers = [
    { id: 1, name: 'Анна Петрова', email: 'anna@example.com', role: 'user', joinDate: '2024-01-15', progress: 85 },
    { id: 2, name: 'Михаил Иванов', email: 'mikhail@example.com', role: 'user', joinDate: '2024-02-20', progress: 42 },
    { id: 3, name: 'Елена Сидорова', email: 'elena@example.com', role: 'user', joinDate: '2024-03-10', progress: 73 }
  ];

  const tabs = [
    { id: 'overview', label: 'Обзор', icon: BarChart3 },
    { id: 'users', label: 'Пользователи', icon: Users },
    { id: 'courses', label: 'Курсы', icon: BookOpen },
    { id: 'pecs', label: 'PECS карточки', icon: Image },
    { id: 'settings', label: 'Настройки', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Панель администратора
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Добро пожаловать, {user?.name}! Управляйте платформой "Сенсорный Мир"
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                    <div className="flex items-center">
                      <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Всего пользователей
                        </p>
                        <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                          {mockStats.totalUsers.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                    <div className="flex items-center">
                      <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                          Активных курсов
                        </p>
                        <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                          {mockStats.activeCourses}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
                    <div className="flex items-center">
                      <BarChart3 className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          Завершено уроков
                        </p>
                        <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                          {mockStats.completedLessons.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Последняя активность
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Новый пользователь зарегистрировался
                      </span>
                      <span className="text-xs text-gray-500">2 часа назад</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Урок "Азбука Поведения" завершен 15 раз
                      </span>
                      <span className="text-xs text-gray-500">4 часа назад</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Добавлена новая PECS карточка
                      </span>
                      <span className="text-xs text-gray-500">1 день назад</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Управление пользователями
                  </h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Добавить пользователя</span>
                  </button>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Пользователь
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Роль
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Дата регистрации
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Прогресс
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                          Действия
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {mockUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {user.name}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {user.email}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              user.role === 'admin' 
                                ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }`}>
                              {user.role === 'admin' ? 'Администратор' : 'Пользователь'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                            {new Date(user.joinDate).toLocaleDateString('ru-RU')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mr-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${user.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {user.progress}%
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Управление курсами
                  </h3>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Добавить курс</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coursesData.map((course) => (
                    <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {course.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {course.lessons.length} уроков
                      </p>
                      <div className="flex space-x-2">
                        <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                          <Edit className="w-4 h-4" />
                          <span>Редактировать</span>
                        </button>
                        <button className="flex items-center justify-center px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'pecs' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Управление PECS карточками
                  </h3>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <Upload className="w-4 h-4" />
                      <span>Импорт</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Plus className="w-4 h-4" />
                      <span>Добавить карточку</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Здесь будет интерфейс для управления PECS карточками: добавление, редактирование, 
                    категоризация и управление аудио файлами.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Настройки системы
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Резервное копирование
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Создание резервных копий данных платформы
                    </p>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Создать резервную копию</span>
                    </button>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Аналитика
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Настройки сбора и анализа данных
                    </p>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      <BarChart3 className="w-4 h-4" />
                      <span>Просмотреть отчеты</span>
                    </button>
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

export default AdminPage;

