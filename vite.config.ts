import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace <REPO_NAME> with your actual GitHub repository name (e.g., '/aws-prep/')
  base: '/aws-clf-prep/', 
})
