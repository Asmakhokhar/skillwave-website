import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),

  ],
  extend: {
    animation: {
      'feedback-scroll': 'feedback-scroll linear infinite',
    },
    keyframes: {
      'feedback-scroll': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
})
