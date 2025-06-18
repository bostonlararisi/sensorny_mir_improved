import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { coursesData } from '../data/siteData';

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-calm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-high-contrast text-center mb-12">
          {t('courses')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden card-autism-friendly"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                  <span className="text-3xl">{course.icon}</span>
                </div>
                <h2 className="text-2xl font-bold text-high-contrast mb-2">
                  {t(course.title)}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {t(course.description)}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{t('difficulty')}: {t(course.difficulty)}</span>
                  <span>{course.estimatedTime} {t('minutes')}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-high-contrast mb-3">
                  {t('course_lessons')} ({course.lessons.length}):
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 max-h-32 overflow-y-auto">
                  {course.lessons.slice(0, 3).map((lesson) => (
                    <li key={lesson.id} className="mb-1">
                      <Link 
                        to={`/courses/${course.id}/lessons/${lesson.id}`}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition-colors"
                      >
                        {t(lesson.title)}
                      </Link>
                    </li>
                  ))}
                  {course.lessons.length > 3 && (
                    <li className="text-gray-500">
                      ... и еще {course.lessons.length - 3} уроков
                    </li>
                  )}
                </ul>
                <Link
                  to={`/courses/${course.id}/lessons/${course.lessons[0].id}`}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>{t('start_lesson')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

