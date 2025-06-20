import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Наш исправленный путь
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

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

  // Этот useEffect будет следить за состоянием аутентификации в Firebase
  useEffect(() => {
    // onAuthStateChanged возвращает функцию для отписки, которую мы вызовем при размонтировании компонента
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Пользователь вошел в систему
        // Мы можем здесь обогатить объект пользователя данными из Firestore, если нужно
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          // В Firebase имя пользователя (displayName) нужно устанавливать отдельно
          // Пока будем использовать часть email, как ты и делал
          name: firebaseUser.displayName || firebaseUser.email.split('@')[0], 
          role: firebaseUser.email === 'admin@sensornymir.ru' ? 'admin' : 'user' // Эту логику роли потом лучше перенести в Firestore
        });
      } else {
        // Пользователь вышел
        setUser(null);
      }
      setLoading(false); // Загрузка начальной информации о пользователе завершена
    });

    // Отписываемся от слушателя, когда компонент исчезает
    return () => unsubscribe();
  }, []);

  // НАСТОЯЩАЯ ФУНКЦИЯ РЕГИСТРАЦИИ
  const register = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Здесь можно будет добавить логику для обновления профиля пользователя (например, добавить имя)
      // `onAuthStateChanged` автоматически обработает нового пользователя
      return { success: true, user: userCredential.user };
    } catch (error) {
      // Firebase возвращает понятные коды ошибок, их можно будет переводить
      console.error("Firebase registration error:", error);
      return { success: false, error: error.message };
    }
  };

  // НАСТОЯЩАЯ ФУНКЦИЯ ВХОДА
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // `onAuthStateChanged` автоматически обработает вход
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error("Firebase login error:", error);
      return { success: false, error: error.message };
    }
  };

  // НАСТОЯЩАЯ ФУНКЦИЯ ВЫХОДА
  const logout = async () => {
    try {
      await signOut(auth);
      // `onAuthStateChanged` автоматически обработает выход
    } catch (error) {
      console.error("Firebase logout error:", error);
    }
  };

  // Функции для прогресса пока оставим без изменений, но в будущем их тоже нужно будет привязать к Firestore
  const updateProgress = (courseId, lessonId, completed = true) => { /* ... */ };
  const getUserProgress = (courseId, lessonId) => { /* ... */ };
  const getCourseProgress = (courseId) => { /* ... */ };

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
      {!loading && children}
    </AuthContext.Provider>
  );
};