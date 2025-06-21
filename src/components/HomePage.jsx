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
  
  return (
    <div className="min-h-screen bg-calm">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 opacity-90 leading-tight">
              {t('welcome_description')}
            </h1>

            {/* Место для логотипа или тематической картинки */}
            <div className="my-8 flex justify-center">
              <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                <span className="text-white/80 text-lg">Лого/Картинка</span>
              </div>
            </div>

            {/* Методики с иконками */}
            <div className="flex flex-wrap gap-3 justify-center items-center">
              {coursesData.map((course) => (
                <Link
                  key={course.id}
                  to={`/courses/${course.id}`}
                  className="btn-primary inline-flex items-center space-x-2 text-base"
                >
                  <span className="text-xl">{course.icon}</span>
                  <span>{t(course.title)}</span>
                </Link>
              ))}
            </div>
            
            {/* Блок для теста */}
            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="mb-3 text-white/90">
                Не уверены, с чего начать? Наш тест поможет определить подходящую методику.
              </p>
              <Link
                to="/test"
                className="min-h-12 px-6 py-3 text-base font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline inline-flex items-center space-x-2"
              >
                <ClipboardCheck className="w-5 h-5" />
                <span>Пройти тест</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Ключевые преимущества */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Блок с заголовком "Практический подход..." УДАЛЕН */}
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