import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      theme: path.resolve('src/theme'),
      components: path.resolve('src/components'),
      pages: path.resolve('src/pages'),
      router: path.resolve('src/router'),
      models: path.resolve('src/models'),
      utils: path.resolve('src/utils'),
      hooks: path.resolve('src/hooks'),
      persist: path.resolve('src/persist'),
      store: path.resolve('src/persist/store'),
      slices: path.resolve('src/persist/slices'),
      assets: path.resolve('src/assets'),
      api: path.resolve('src/api'),
    },
  },
});
