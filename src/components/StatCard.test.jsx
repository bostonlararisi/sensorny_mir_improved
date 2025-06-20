import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatCard from './StatCard'; // Наш компонент
import { Heart } from 'lucide-react'; // Иконка, которую мы передадим в компонент

// describe - это группа тестов для одного компонента.
describe('StatCard', () => {

  // it - это описание одного конкретного теста.
  it('должен правильно отображать переданные номер и метку', () => {
    
    // 1. Подготовка: "Рисуем" наш компонент в виртуальном экране
    render(
      <StatCard 
        icon={Heart} 
        number="100%" 
        label="Тестовая метка" 
      />
    );

    // 2. Проверка: Ищем на "экране" нужные нам элементы
    const numberElement = screen.getByText('100%');
    const labelElement = screen.getByText('Тестовая метка');

    // 3. Утверждение: Ожидаем, что оба элемента существуют на странице
    expect(numberElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });

});