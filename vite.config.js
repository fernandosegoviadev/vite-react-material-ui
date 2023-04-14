import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'

// https://vitejs.dev/config/

export default {
  plugins: [
    react(),
    ViteRestart({
      restart: [
        'my.config.[jt]s',
      ]
    })
  ],
}
