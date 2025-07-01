import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHub = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig(() => {
  return {
    base: isGitHub ? '/quizbowl/' : '/',
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});