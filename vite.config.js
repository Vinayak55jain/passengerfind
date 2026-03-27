import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/signals': 'http://localhost:7000',
      '/hotspots': 'http://localhost:7000',
      '/signal': 'http://localhost:7000',
      '/generate-test-locations': 'http://localhost:7000'
    }
  }
})
