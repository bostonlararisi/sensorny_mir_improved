import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/siteData';
import { 
  Users, 
  Target, 
  Lightbulb,
  ClipboardCheck,
  Globe
} from 'lucide-react';

const HomePage = () => {
  const { t } = useTranslation();

  // --- НАЧАЛО НОВОЙ ЛОГИКИ ГРУППИРОВКИ ---
  const categories = [
    {
      title: 'Поведенческие и структурные подходы',
      ids: ['aba', 'teacch']
    },
    {
      title: 'Развитие коммуникации и социума',
      ids: ['pecs', 'social']
    },
    {
      title: 'Игровые и сенсорные методики',
      ids: ['si', 'esdm']
    }
  ];

  const getCourseById = (id) => coursesData.find(c => c.id === id);
  // --- КОНЕЦ НОВОЙ ЛОГИКИ ГРУППИРОВКИ ---
  
  return (
    <div className="min-h-screen bg-calm">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {t('welcome_description')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
              Начните с выбора наиболее актуального для вас направления или пройдите тест, чтобы получить рекомендацию.
            </p>
          </div>

          {/* --- НАЧАЛО НОВОГО СТРУКТУРИРОВАННОГО БЛОКА МЕТОДИК --- */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {categories.map(category => (
              <div key={category.title} className="bg-white/10 p-6 rounded-2xl">
                <h3 className="font-bold text-white border-b border-white/20 pb-3 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.ids.map(id => {
                    const course = getCourseById(id);
                    if (!course) return null;
                    return (
                      <Link key={course.id} to={`/courses/${course.id}`} className="btn-primary-outline">
                        <span className="text-xl mr-3">{course.icon}</span>
                        <span>{t(course.title)}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {/* --- КОНЕЦ НОВОГО БЛОКА МЕТОДИК --- */}
          
          {/* Блок для теста */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p className="mb-3 text-white/90">
              Не уверены, с чего начать?
            </p>
            <Link
              to="/test"
              className="min-h-12 px-6 py-3 text-base font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline inline-flex items-center space-x-2"
            >
              <ClipboardCheck className="w-5 h-5" />
              <span>Пройти тест для подбора методики</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Ключевые преимущества */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Научная обоснованность</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Все методики основаны на доказательной практике.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Практические инструменты</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Готовые к использованию материалы и методики.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Поддержка сообщества</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Общайтесь и делитесь опытом на нашем форуме.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Мультиязычность</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Поддержка языков малых народов России.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;