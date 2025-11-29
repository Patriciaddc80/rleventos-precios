import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,tsx}',
    })
  ],
  server: {
    port: 3000,
    open: true,
    host: true,
    strictPort: false,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  publicDir: 'public',
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})

