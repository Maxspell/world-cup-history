/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
  ],
  safelist: [
    'text-blue-600',
    'hover:underline',
    'text-red-500',
    'text-3xl',
    'font-bold',
    'underline'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}