import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { coursesData } from '../data/siteData';
import EvidenceScale from './EvidenceScale'; // <--- ИМПОРТИРУЕМ НАШУ НОВУЮ ШКАЛУ

const Courses = () => {
  const { t } = useTranslation();

  // Группируем курсы по уровню доказательности
  const highEvidence = coursesData.filter(c => c.evidenceLevel >= 4);
  const mediumEvidence = coursesData.filter(c => c.evidenceLevel === 3);
  const lowEvidence = coursesData.filter(c => c.evidenceLevel <= 2);

  const CourseSection = ({ title, courses, color }) => (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <span className={`w-3 h-3 rounded-full mr-3 ${color}`}></span>
        <h2 className="text-2xl md:text-3xl font-bold text-high-contrast">{title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <span className="text-3xl">{course.icon}</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-high-contrast">
                    {t(course.title)}
                  </h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {t(course.difficulty)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm">
                {t(course.description)}
              </p>
              
              <div className="mb-4">
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">
                  Уровень доказательности
                </p>
                <EvidenceScale level={course.evidenceLevel} />
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
  );

  return (
    <div className="min-h-screen bg-calm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-high-contrast mb-4">
            Все методики
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ознакомьтесь со всеми подходами и их уровнем научной доказательности.
          </p>
        </div>

        {/* Секция с высокой доказанностью */}
        {highEvidence.length > 0 && (
          <CourseSection title="Высокая доказательность" courses={highEvidence} color="bg-green-500" />
        )}

        {/* Секция со средней доказанностью */}
        {mediumEvidence.length > 0 && (
          <CourseSection title="Средняя доказанность" courses={mediumEvidence} color="bg-yellow-400" />
        )}

        {/* Секция с низкой доказанностью */}
        {lowEvidence.length > 0 && (
          <CourseSection title="Низкая или смешанная доказанность" courses={lowEvidence} color="bg-red-500" />
        )}

      </div>
    </div>
  );
};

export default Courses;