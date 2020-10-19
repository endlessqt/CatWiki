module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
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
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
