module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Указываем пути к файлам, где могут быть классы Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary:['var(--font-secondary)', 'cursive'],
      },
    },
  },
  plugins: [],
}
