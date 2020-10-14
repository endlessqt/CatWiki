module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-lg": "url('/HeroImagelg.png')",
        "hero-md": "url('/HeroImagemd.png')",
        "hero-sm": "url('/HeroImagesm.png')",
      }),
      colors: {
        "hero-back": "#E3E1DC",
      },
      borderRadius: {
        layoutDefault: "42px",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        14: "3.5rem",
        28: "7rem",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
