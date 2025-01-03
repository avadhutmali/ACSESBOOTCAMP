import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-three/fiber': 'node_modules/@react-three/fiber/dist/umd/react-three-fiber.js',
      '@react-three/drei': 'node_modules/@react-three/drei/dist/umd/react-three-drei.js',
    },
  },
});
