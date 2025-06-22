import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/siteData';
import {
  ClipboardCheck,
} from 'lucide-react';

const HomePage = () => {
  const { t } = useTranslation();

  // --- НОВАЯ СТРУКТУРА КАТЕГОРИЙ ---
  const categories = [
    {
      title: 'Прикладной анализ поведения (ABA)',
      ids: ['aba', 'fct', 'prt']
    },
    {
      title: 'Развивающие и игровые подходы',
      ids: ['esdm', 'dir_floortime', 'jasper']
    },
    {
      title: 'Коммуникация и социальные навыки',
      ids: ['hanen_mtw', 'pecs', 'social_stories', 'social_skills_groups']
    },
    {
      title: 'Дополнительные и поддерживающие методы',
      ids: ['cbt', 'teacch', 'video', 'parent_mediated', 'sensory_integration', 'music_therapy', 'mindfulness', 'telehealth']
    }
  ];

  const getCourseById = (id) => coursesData.find(c => c.id === id);

  return (
    <div className="min-h-screen bg-calm">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          
          {/* --- ИЗМЕНЕННЫЙ БЛОК --- */}
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t('hero_title')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80">
              {t('hero_subtitle')}
            </p>
          </div>

          {/* --- НОВЫЙ БЛОК ДЛЯ ЛОГОТИПА --- */}
          <div className="mt-10 mb-4 flex justify-center">
            <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20">
              <span className="text-white/50 text-lg">Лого</span>
            </div>
          </div>
          {/* --- КОНЕЦ НОВОГО БЛОКА --- */}

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {categories.map(category => (
              <div key={category.title} className="bg-white/10 p-5 rounded-xl">
                <h3 className="font-bold text-white border-b border-white/20 pb-3 mb-4 text-lg">{category.title}</h3>
                <div className="space-y-3">
                  {category.ids.map(id => {
                    const course = getCourseById(id);
                    if (!course) return null;
                    return (
                      <Link key={course.id} to={`/courses/${course.id}`} className="btn-primary-outline">
                        <span>{t(course.title)}</span>
                        <span className="text-xl ml-2">{course.icon}</span> 
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 text-center">
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

      <div className="h-24 bg-calm"></div>
    </div>
  );
};

export default HomePage;