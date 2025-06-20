import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <div className="mb-4">
          <Link to="/terms" className="text-sm hover:underline mx-2">Условия использования</Link>
          <Link to="/privacy" className="text-sm hover:underline mx-2">Политика конфиденциальности</Link>
        </div>
        <p className="text-xs mb-2 max-w-3xl mx-auto">
          <strong>ВАЖНО:</strong> Материалы на этом сайте носят исключительно информационный и образовательный характер и не являются заменой профессиональной медицинской консультации, диагностики или лечения. Всегда обращайтесь за советом к своему врачу или другому квалифицированному медицинскому работнику по любым вопросам, связанным с состоянием здоровья вашего ребенка.
        </p>
        <p className="text-sm">
          © {currentYear} Сенсорный Мир. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;