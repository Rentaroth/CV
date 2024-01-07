import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default ({ mode }) => {
  loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react(), tailwindcss(), autoprefixer()],
  })
}