import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненные данные пользователя при загрузке
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Имитация API вызова - в реальном проекте здесь будет Firebase Auth
      const mockUser = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        role: email === 'admin@sensornymir.ru' ? 'admin' : 'user',
        avatar: null,
        createdAt: new Date().toISOString(),
        progress: {}
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, user: mockUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password) => {
    try {
      // Имитация API вызова - в реальном проекте здесь будет Firebase Auth
      const mockUser = {
        id: Date.now(),
        email,
        name,
        role: 'user',
        avatar: null,
        createdAt: new Date().toISOString(),
        progress: {}
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { success: true, user: mockUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProgress = (courseId, lessonId, completed = true) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      progress: {
        ...user.progress,
        [courseId]: {
          ...user.progress[courseId],
          [lessonId]: {
            completed,
            completedAt: new Date().toISOString()
          }
        }
      }
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const getUserProgress = (courseId, lessonId) => {
    if (!user || !user.progress) return null;
    return user.progress[courseId]?.[lessonId] || null;
  };

  const getCourseProgress = (courseId) => {
    if (!user || !user.progress) return { completed: 0, total: 0 };
    
    const courseProgress = user.progress[courseId] || {};
    const completed = Object.values(courseProgress).filter(lesson => lesson.completed).length;
    const total = Object.keys(courseProgress).length;
    
    return { completed, total };
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateProgress,
    getUserProgress,
    getCourseProgress,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

