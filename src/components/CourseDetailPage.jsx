import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { coursesData } from '../data/siteData';
import { ArrowRight, Book, Star, AlertTriangle } from 'lucide-react'; // Добавили иконки

// Новый компонент для отображения рейтинга в виде звезд
const EvidenceRating = ({ level }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < level ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
      />
    );
  }
  return <div className="flex items-center space-x-1">{stars}</div>;
};

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

  // Здесь можно будет добавить больше специфичной информации для каждой методики
  const warnings = {
    esdm: "Эффективность выше для детей раннего возраста (1-5 лет) и требует высокой вовлеченности родителей.",
    teacch: "Методика отлично структурирует среду, но показывает ограниченное влияние на развитие речевых и когнитивных навыков.",
    si: "Важно понимать, что на данный момент нет строгих научных доказательств влияния этой терапии на ключевые симптомы РАС.",
    pecs: "Это стартовая система коммуникации. Для дальнейшего развития речи ее необходимо интегрировать в более широкую программу.",
  };

  return (
    <div className="bg-calm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Заголовок и рейтинг */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-high-contrast mb-4">
              {t(course.title)}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t(course.description)}
            </p>
            <div className="mt-4 flex items-center justify-center space-x-2">
              <span className="text-sm font-medium text-gray-500">Уровень доказательности:</span>
              <EvidenceRating level={course.evidenceLevel} />
            </div>
          </div>

          {/* Блок с предупреждением/важной информацией */}
          {warnings[course.id] && (
            <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 rounded-r-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-yellow-400 dark:text-yellow-500" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    <span className="font-bold">Важно знать:</span> {warnings[course.id]}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Список уроков */}
          <div>
            <h2 className="text-2xl font-bold text-high-contrast mb-6">Уроки курса:</h2>
            <div className="space-y-4">
              {course.lessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
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
    </div>
  );
};

export default CourseDetailPage;