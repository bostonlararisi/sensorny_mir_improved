import React from 'react';

// Этот компонент будет принимать один параметр - level (уровень от 1 до 5)
const EvidenceBar = ({ level }) => {
  let gradientClass = '';

  // В зависимости от уровня, мы выбираем нужный стиль градиента из Tailwind CSS
  switch (level) {
    case 5: // Зеленый
      gradientClass = 'from-green-500 to-green-400';
      break;
    case 4: // От зеленого к желтому
      gradientClass = 'from-green-500 to-yellow-400';
      break;
    case 3: // От желтого к оранжевому
      gradientClass = 'from-yellow-400 to-orange-400';
      break;
    case 2: // От оранжевого к красному
      gradientClass = 'from-orange-500 to-red-500';
      break;
    case 1: // Красный
      gradientClass = 'from-red-500 to-red-600';
      break;
    default: // Серый, если уровень не задан
      gradientClass = 'from-gray-400 to-gray-500';
  }

  return (
    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <div className={`h-full bg-gradient-to-r ${gradientClass}`}></div>
    </div>
  );
};

export default EvidenceBar;