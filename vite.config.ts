import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Multi-page build: the home page plus the separate Projects and News pages
      input: {
        main: resolve(__dirname, 'index.html'),
        news: resolve(__dirname, 'news.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
