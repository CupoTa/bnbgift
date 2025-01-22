import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Разрешает доступ извне
    port: 5173, // Порт, используемый DevTunnels
  },
})
