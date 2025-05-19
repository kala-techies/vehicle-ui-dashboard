import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vehicle-ui-dashboard/',  // ✅ Add this line
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
