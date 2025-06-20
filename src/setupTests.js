import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Эта команда автоматически очищает JSDOM (нашу имитацию браузера) после каждого теста.
// Это лучшая практика, которая предотвращает ситуацию, когда результаты одного теста
// случайно влияют на результаты другого.
afterEach(() => {
  cleanup();
});