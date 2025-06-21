import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { coursesData } from '../data/siteData';
import { ArrowRight, Book } from 'lucide-react';

const CourseDetailPage = () => {
  const { t } = useTranslation();
  const { courseId } = useParams();
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Курс не найден</h1>
        <Link to="/courses" className="text-blue-600 hover:underline mt-4 inline-block">
          Вернуться ко всем курсам
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-calm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-high-contrast mb-4">
            {t(course.title)}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t(course.description)}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-high-contrast mb-6">Уроки курса:</h2>
          <div className="space-y-4">
            {course.lessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                // ВОТ ИСПРАВЛЕННАЯ СТРОКА: правильные обратные кавычки и чистое содержимое
                to={`/courses/${course.id}/lessons/${lesson.id}`}
                className="card-autism-friendly flex items-center justify-between p-4 group hover:border-blue-500 dark:hover:border-blue-500"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Book className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Урок {index + 1}</p>
                    <p className="font-bold text-high-contrast">{t(lesson.title)}</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CourseDetailPage;