import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // ensure npm run build outputs to build/ instead of dist/
    emptyOutDir: true,
  },
});

