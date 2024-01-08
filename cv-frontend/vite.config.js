import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  loadEnv(mode, '');
  if(command === 'build') {
    return defineConfig({
      plugins: [react(), babel({ babelHelpers: 'bundled'})],
      build: {
        outDir: "./dist/"
      }
    })
  }
  return defineConfig({
    plugins: [react(), babel({ babelHelpers: 'bundled'}), tailwindcss(), autoprefixer()],
    build: {
      outDir: "./dist/"
    }
  })
}