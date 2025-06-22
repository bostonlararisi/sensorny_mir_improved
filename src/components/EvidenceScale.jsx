import React from 'react';

// Компонент принимает рейтинг "level" от 1 до 5
const EvidenceScale = ({ level }) => {
  // Создаем массив из 5 элементов, чтобы отрисовать 5 сегментов шкалы
  const segments = Array.from({ length: 5 });

  const getColor = (level) => {
    if (level >= 4) return 'bg-green-500'; // Зеленый для высокого рейтинга
    if (level === 3) return 'bg-yellow-400'; // Желтый для среднего
    return 'bg-red-500'; // Красный для низкого
  };

  const activeColor = getColor(level);

  return (
    <div className="flex w-full gap-1">
      {segments.map((_, index) => (
        <div
          key={index}
          className={`h-2 flex-1 rounded-sm ${
            // Если индекс сегмента меньше рейтинга, он "светится"
            index < level 
              ? activeColor 
              : 'bg-gray-200 dark:bg-gray-600' // Цвет для "пустых" сегментов
          }`}
        ></div>
      ))}
    </div>
  );
};

export default EvidenceScale;