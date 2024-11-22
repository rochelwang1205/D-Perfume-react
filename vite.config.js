import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/D-Perfume-react/',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
})