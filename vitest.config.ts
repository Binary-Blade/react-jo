import { defineConfig } from 'vitest/config';

import path from 'path';
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    setupFiles: ['./setupTests.ts'],
    globals: true, // Optional: ensures that global variables like `expect` are available
    environment: 'jsdom' // Use 'jsdom' environment for DOM testing
  }
});
