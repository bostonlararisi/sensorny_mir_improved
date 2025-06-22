// 📁 src/utils/firebaseErrorMessages.js

export const translateFirebaseError = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Этот email уже зарегистрирован.';
    case 'auth/weak-password':
      return 'Слишком слабый пароль.';
    case 'auth/invalid-email':
      return 'Некорректный формат email.';
    case 'auth/user-not-found':
      return 'Пользователь не найден.';
    case 'auth/wrong-password':
      return 'Неверный пароль.';
    default:
      return 'Произошла неизвестная ошибка. Попробуйте позже.';
  }
};
