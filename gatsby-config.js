const defaultWebFontsConfig = {
  fonts: {
    google: [
      {
        family: `Roboto`,
        variants: [`300`, `400`, `500`],
      },
      {
        family: `Roboto Slab`,
        variants: [`400`, `700`],
      },
    ],
  },
}

const defaultStylesConfig = {
  stylesProvider: {
    injectFirst: true,
  },
}

module.exports = themeOptions => {
  const {
    stylesConfig = defaultStylesConfig,
    webFontsConfig = defaultWebFontsConfig,
  } = themeOptions

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          ...stylesConfig,
        },
      },
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-webfonts`,
        options: {
          ...webFontsConfig,
        },
      },
    ],
  }
}
