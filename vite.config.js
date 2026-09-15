import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://kael-odin.github.io/kael-odin-portfolio/
// Vite reads GITHUB_REPOSITORY at build time in CI; locally falls back to '/'.
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : ''
export default defineConfig({
  plugins: [react()],
  base: repoName ? `/${repoName}/` : '/',
})
