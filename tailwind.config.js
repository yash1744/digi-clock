module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Add this line to include all JS, TS, JSX, and TSX files in the src directory
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      dropShadow: {
        react: "0 0 2em #61dafbaa",
        vite: "0 0 2em #646cffaa",
      },
    },
  },
  plugins: [],
};
