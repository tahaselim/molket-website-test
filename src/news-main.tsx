import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NewsPage from './NewsPage.tsx';
import './index.css';
import './../i18n.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NewsPage />
  </StrictMode>
);
