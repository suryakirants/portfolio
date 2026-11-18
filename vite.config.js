import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// base './' makes asset paths work on GitHub Pages for any repository name
export default defineConfig({ base: './', plugins: [react()] })
