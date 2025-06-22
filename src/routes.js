// 📁 src/routes.js

export const ROUTES = {
  HOME: '/',
  COURSES: '/courses',
  COURSE_DETAIL: (id) => `/courses/${id}`,
  LESSON_DETAIL: (courseId, lessonId) => `/courses/${courseId}/lessons/${lessonId}`,
  PECS: '/pecs',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  FORUM: '/forum',
  ADMIN: '/admin'
};
