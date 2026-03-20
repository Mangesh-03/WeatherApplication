import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
}
