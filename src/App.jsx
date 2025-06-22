import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import { AuthProvider } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import ErrorFallback from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from './components/ProtectedRoute';
import { useDarkMode } from './hooks/useDarkMode';

// Lazy load components for better performance
const HomePage = lazy(() => import('./components/HomePage'));
const Courses = lazy(() => import('./components/Courses'));
const CourseDetailPage = lazy(() => import('./components/CourseDetailPage'));
const LessonPage = lazy(() => import('./components/LessonPage'));
const PecsLibrary = lazy(() => import('./components/PecsLibrary'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const RegisterPage = lazy(() => import('./components/RegisterPage'));
const ProfilePage = lazy(() => import('./components/ProfilePage'));
const ForumPage = lazy(() => import('./components/ForumPage'));
const AdminPage = lazy(() => import('./components/AdminPage'));
const ForgotPasswordPage = lazy(() => import('./components/ForgotPassword')); // <-- добавлено

const NotFoundPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-calm">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-high-contrast mb-4">{t('not_found')}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Страница, которую вы ищете, не существует.
        </p>
        <a 
          href="/"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>{t('go_home')}</span>
        </a>
      </div>
    </div>
  );
};

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <AuthProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
          <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          
          <main className="flex-grow">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/:courseId" element={<CourseDetailPage />} />
                <Route path="/courses/:courseId/lessons/:lessonId" element={<LessonPage />} />
                <Route path="/pecs" element={<PecsLibrary />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* <-- добавлено */}

                {/* Protected Routes */}
                <Route 
                  path="/profile" 
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/forum" 
                  element={
                    <ProtectedRoute>
                      <ForumPage />
                    </ProtectedRoute>
                  } 
                />
                
                {/* Admin Only Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute adminOnly={true}>
                      <AdminPage />
                    </ProtectedRoute>
                  } 
                />
                
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          
        </div>
      </ErrorBoundary>
    </AuthProvider>
  );
}

export default App;
