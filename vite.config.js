import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/CarrierCounselling/', // Replace <repository-name> with your actual repo name
  plugins: [react()]
})