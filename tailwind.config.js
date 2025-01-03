module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure it scans your project files
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #01072b, #041a41, #062959, #043972, #24528b, #5074a2, #7997b9, #a5bbd1)',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};
