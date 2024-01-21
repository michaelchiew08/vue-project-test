import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// The 'alias' is to handle the path when import by putting '@' will always
// represent in './src' directory location.
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
