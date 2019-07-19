const parallaxStyle = theme => ({
  primary: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.primary.light
    } 0,${theme.palette.primary.main} 100%)`,
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  secondary: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.secondary.light
    } 0,${theme.palette.secondary.main} 100%)`,
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  info: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.info.light
    } 0,${theme.palette.info.main} 100%)`,
    backgroundColor: theme.palette.info.main,
    color: "white",
  },
  success: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.success.light
    } 0,${theme.palette.success.main} 100%)`,
    backgroundColor: theme.palette.success.main,
    color: "white",
  },
  warning: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.warning.light
    } 0,${theme.palette.warning.main} 100%)`,
    backgroundColor: theme.palette.warning.main,
    color: "white",
  },
  error: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.error.light
    } 0,${theme.palette.error.main} 100%)`,
    backgroundColor: theme.palette.error.main,
    color: "white",
  },
  black: {
    background: `radial-gradient(ellipse at center,${
      theme.palette.black.light
    } 0,${theme.palette.black.main} 100%)`,
    backgroundColor: theme.palette.black.main,
    color: "white",
  },
})

export default parallaxStyle
