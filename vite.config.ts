import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// Vite is the tool that runs your site while you work and builds it for publishing.
export default defineConfig({
  plugins: [react(), tailwindcss()], // tailwindcss() turns Tailwind class names into real CSS
  // './' makes the built site work from any web address, including GitHub Pages.
  base: './',
  resolve: {
    // Lets you write '@/components/ui/button' instead of '../../components/ui/button'
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
});
