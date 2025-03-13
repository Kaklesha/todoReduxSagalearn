
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { createRoot } from 'react-dom/client';
import React from 'react';

// Находим корневой элемент
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element not found');
}

// Создаем корень
const root = createRoot(container);

// Рендерим приложение
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);