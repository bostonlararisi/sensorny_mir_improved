import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Wrench,
  BookOpen
} from 'lucide-react';
import ProgressBar from './ProgressBar';
import { coursesData } from '../data/siteData';

const LessonPage = () => {
  const { t } = useTranslation();
  const { courseId, lessonId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const course = coursesData.find(c => c.id === courseId);
  const lesson = course?.lessons.find(l => l.id === lessonId);
  
  if (!course || !lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          {t('page_not_found')}
        </h1>
        <Link to="/courses" className="btn-primary text-white no-underline">
          {t('go_home')}
        </Link>
      </div>
    );
  }
  
  const totalSteps = lesson.steps.length;
  const isLastStep = currentStep === totalSteps - 1;
  
  const handleNextStep = () => {
    if (isLastStep) {
      setIsCompleted(true);
    } else {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
    }
  };
  
  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };
  
  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center card-autism-friendly">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            {t('lesson_completed')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Отличная работа! Вы успешно завершили урок "{t(lesson.title)}"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/courses/${courseId}`}
              className="btn-primary text-white no-underline"
            >
              {t('back_to_course')}
            </Link>
            <button
              onClick={() => {
                setIsCompleted(false);
                setCurrentStep(0);
              }}
              className="btn-secondary"
            >
              Повторить урок
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const currentStepData = lesson.steps[currentStep];
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="breadcrumb">
        <Link to="/courses" className="hover:text-blue-600">
          {t('courses')}
        </Link>
        <span className="breadcrumb-separator">→</span>
        <Link to={`/courses/${courseId}`} className="hover:text-blue-600">
          {t(course.title)}
        </Link>
        <span className="breadcrumb-separator">→</span>
        <span className="text-gray-700 dark:text-gray-300">
          {t(lesson.title)}
        </span>
      </div>
      
      {/* Lesson Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-high-contrast mb-4">
          {t(lesson.title)}
        </h1>
        
        <div className="card-autism-friendly mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Target className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">{t('lesson_goal')}:</span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {t(lesson.goal)}
          </p>
        </div>
        
        {lesson.tools && lesson.tools.length > 0 && (
          <div className="card-autism-friendly mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Wrench className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">{t('lesson_tools')}:</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {lesson.tools.map((tool, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span className="text-gray-600 dark:text-gray-300">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <ProgressBar
          current={currentStep + 1}
          total={totalSteps}
          label={`${t('lesson_steps')} (${currentStep + 1} из ${totalSteps})`}
        />
      </div>
      
      {/* Current Step */}
      <div className="card-autism-friendly mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
            {currentStep + 1}
          </div>
          <h2 className="text-xl font-bold text-high-contrast">
            {currentStepData.title}
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {currentStepData.text}
          </p>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 0}
          className={`btn-secondary flex items-center space-x-2 ${
            currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('prev_lesson')}</span>
        </button>
        
        <span className="text-sm text-gray-500">
          {currentStep + 1} из {totalSteps}
        </span>
        
        <button
          onClick={handleNextStep}
          className="btn-primary flex items-center space-x-2"
        >
          <span>{isLastStep ? 'Завершить' : t('next_lesson')}</span>
          {isLastStep ? (
            <CheckCircle className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
};

export default LessonPage;

