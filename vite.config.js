// __aindriya_hmr_off__: HMR disabled by the platform (the preview is
// reloaded on file writes instead — see file-api.js).
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { hmr: false,
    host: '0.0.0.0',
    port: 3000
  }
})
