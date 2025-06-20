import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/siteData';
import { 
  BookOpen, 
  Image, 
  MessageCircle, 
  Users, 
  Target, 
  Lightbulb,
  ClipboardCheck,
  ListChecks,
  BookHeart,
  MessagesSquare,
  Globe // <--- Заменили Heart на Globe для большей логичности
} from 'lucide-react';

// Компонент StatCard нам больше не нужен на этой странице
import FeatureCard from './FeatureCard'; 

const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-calm">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('welcome_message')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {t('welcome_description')}
            </p>
            
            <div className="mt-10 text-center">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                {coursesData.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    className="btn-primary text-base"
                  >
                    {t(course.title)}
                  </Link>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
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
      </div>

      {/* --- НАЧАЛО ОБЪЕДИНЕННОЙ СЕКЦИИ "КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА" --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          
          {/* 1. Научная обоснованность */}
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Научная обоснованность</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Все методики основаны на доказательной практике.</p>
          </div>

          {/* 2. Практические инструменты */}
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Практические инструменты</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Готовые к использованию материалы и методики.</p>
          </div>
          
          {/* 3. Поддержка сообщества */}
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Поддержка сообщества</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Общайтесь и делитесь опытом на нашем форуме.</p>
          </div>

          {/* 4. Мультиязычность */}
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-bold text-high-contrast mb-1">Мультиязычность</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Поддержка языков малых народов России.</p>
          </div>

        </div>
        {/* --- КОНЕЦ ОБЪЕДИНЕННОЙ СЕКЦИИ --- */}

        {/* Секция "Ваши первые шаги" */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-high-contrast mb-4">
              Ваши первые шаги
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Мы создали простую систему, чтобы помочь вам быстро найти то, что нужно.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <ListChecks className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">1. Определите потребность</h3>
                <p className="text-gray-600 dark:text-gray-300">Пройдите наш короткий тест или выберите одну из проверенных методик, чтобы начать.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookHeart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">2. Следуйте урокам</h3>
                <p className="text-gray-600 dark:text-gray-300">Каждый урок - это простое, пошаговое руководство с практическими заданиями.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessagesSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-high-contrast mb-2">3. Получите поддержку</h3>
                <p className="text-gray-600 dark:text-gray-300">Общайтесь с другими родителями и специалистами на нашем форуме. Вы не одни.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;