module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      maxHeight: {
        "drop-down-lg": "13rem",
        "drop-down-sm": "8rem",
      },
      inset: {
        90: "90%",
        80: "80%",
        50: "50%",
        35: "35%",
        20: "20%",
      },
      keyframes: {
        opacityAnime: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        opacityAnime: "opacityAnime 4.5s ease-in",
      },
      textOpacity: {
        60: "0.6",
      },
      gridTemplateRows: {
        gallerySM: "repeat(8,minmax(0, 7vw))",
        galleryLG: "repeat(6,minmax(0, 3.5vw))",
      },
      backgroundImage: (theme) => ({
        "hero-lg": "url('/HeroImagelg.png')",
        "hero-md": "url('/HeroImagemd.png')",
        "hero-sm": "url('/HeroImagesm.png')",
      }),
      colors: {
        "hero-back": "#E3E1DC",
        "divider-main": "#4D270C",
        "text-main": "#291507",
        "icon-main": "#7F736A",
        "back-thing": "#DEC68B",
      },
      borderRadius: {
        roundedImgSm: "12px",
        roundedImgDef: "24px",
        layoutDefault: "42px",
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        14: "3.5rem",
        28: "7rem",
        80: "20rem",
        88: "22rem",
        92: "23rem",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
