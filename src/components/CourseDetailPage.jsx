import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { coursesData } from '../data/siteData';

const CourseDetailPage = () => {
  const { t } = useTranslation();
  // useParams - это хук из React Router, который "читает" динамическую часть URL.
  // В нашем случае, он найдет :courseId в пути и вернет его значение.
  const { courseId } = useParams();

  // Находим данные для нашего конкретного курса по courseId
  const course = coursesData.find(c => c.id === courseId);

  // Если курс по такому ID не найден, можно показать сообщение об ошибке.
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

        {/* Здесь скоро будет список уроков для этого курса */}
        <div className="text-center text-gray-500 p-8 border-2 border-dashed rounded-lg">
          <p>Содержимое для уроков курса '{t(course.title)}' появится здесь...</p>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailPage;