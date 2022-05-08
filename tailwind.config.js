module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "2auto": "repeat(2, auto)",
        "2fr-1fr": "repeat(2fr, 1fr)",
      },
      backgroundImage: {
        "home-desktop": "url('../assets/home/background-home-desktop.jpg')",
        "home-mobile": "url('../assets/home/background-home-mobile.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
