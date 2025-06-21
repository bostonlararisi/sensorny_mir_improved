import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { coursesData } from '../data/siteData';
import EvidenceBar from './EvidenceBar'; // <--- НАШ НОВЫЙ КОМПОНЕНТ

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-calm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-high-contrast mb-4">
            Все методики
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Выберите подход, который подходит именно вам и вашему ребенку.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <span className="text-3xl">{course.icon}</span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-high-contrast">
                      {t(course.title)}
                    </h2>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t(course.difficulty)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {t(course.description)}
                </p>

                {/* --- НАША НОВАЯ ШКАЛА ДОКАЗАТЕЛЬНОСТИ --- */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                    Уровень доказательности
                  </p>
                  <EvidenceBar level={course.evidenceLevel} />
                </div>

                <div className="mt-auto">
                  <Link
                    to={`/courses/${course.id}`}
                    className="btn-primary inline-flex items-center space-x-2 w-full justify-center"
                  >
                    <span>Перейти к курсу</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;