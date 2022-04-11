module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        crew1: "url('/assets/crew/image-douglas-hurley.png')",
        "planet-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "planet-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "planet-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
      },

      textColor: {
        skin: {
          text: "var(--text-color)",
        },
      },
      backgroundColor: {
        skin: {
          background: "var(--bg-color)",
          container: "var(--bg-color-container)",
        },
      },
    },
  },
  plugins: [],
};
