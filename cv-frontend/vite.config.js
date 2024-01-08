import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  loadEnv(mode, '');
  if(command === 'build') {
    return defineConfig({
      plugins: [react()],
      build: {
        outDir: "./dist/"
      }
    })
  }
  return defineConfig({
    plugins: [react(), tailwindcss(), autoprefixer()],
    build: {
      outDir: "./dist/"
    }
  })
}