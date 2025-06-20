import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // <--- НУЖЕН ДЛЯ КОМПОНЕНТА <Link>
import FeatureCard from './FeatureCard';
import { BookOpen } from 'lucide-react';

// Группа тестов для FeatureCard
describe('FeatureCard', () => {

  // Описание теста
  it('должен отображать заголовок, описание и правильную ссылку', () => {

    // 1. Подготовка
    const testProps = {
      icon: BookOpen,
      title: 'Тестовый заголовок',
      description: 'Тестовое описание для карточки.',
      link: '/test-url',
      linkText: 'Перейти по ссылке'
    };

    // "Рисуем" компонент.
    // ВАЖНО: так как внутри FeatureCard есть компонент <Link> из react-router-dom,
    // его нужно обернуть в <BrowserRouter>, чтобы он работал в тестовой среде.
    render(
      <BrowserRouter>
        <FeatureCard {...testProps} />
      </BrowserRouter>
    );

    // 2. Проверка
    // Проверяем, что заголовок и описание на месте
    expect(screen.getByText('Тестовый заголовок')).toBeInTheDocument();
    expect(screen.getByText('Тестовое описание для карточки.')).toBeInTheDocument();

    // Теперь ищем именно ссылку с нужным текстом
    const linkElement = screen.getByRole('link', { name: /Перейти по ссылке/i });
    
    // Проверяем, что ссылка есть на странице
    expect(linkElement).toBeInTheDocument();
    
    // И дополнительно проверяем, что у нее правильный атрибут href (адрес)
    expect(linkElement).toHaveAttribute('href', '/test-url');
  });

});