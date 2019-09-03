import chroma from "chroma-js"

  
  const navPillsStyle = theme => ({
    root: {
      marginTop: "20px",
      paddingLeft: "0",
      marginBottom: "0",
      overflow: "visible !important",
      lineHeight: "24px",
      textTransform: "uppercase",
      fontSize: "12px",
      fontWeight: "500",
      position: "relative",
      display: "block",
      color: "inherit"
    },
    flexContainer: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        flexWrap: "wrap"
      }
    },
    displayNone: {
      display: "none !important"
    },
    fixed: {
      overflow: "visible !important"
    },
    horizontalDisplay: {
      display: "block"
    },
    pills: {
      float: "left",
      position: "relative",
      display: "block",
      borderRadius: "30px",
      minWidth: "100px",
      textAlign: "center",
      transition: "all .3s",
      padding: "10px 15px",
      color: "#555555",
      height: "auto",
      opacity: "1",
      maxWidth: "100%",
      margin: "0 5px"
    },
    pillsWithIcons: {
      borderRadius: "4px"
    },
    tabIcon: {
      width: "30px",
      height: "30px",
      display: "block",
      margin: "15px 0 !important",
      "&, & *": {
        letterSpacing: "normal !important"
      }
    },
    horizontalPills: {
      width: "100%",
      float: "none !important",
      "& + button": {
        margin: "10px 0"
      }
    },
    contentWrapper: {
      marginTop: "20px"
    },
    primary: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.primary.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.primary.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.primary.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.primary.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    secondary: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.secondary.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.secondary.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.secondary.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.secondary.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    info: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.info.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.info.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.info.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.info.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    success: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.success.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.success.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.success.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.success.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    warning: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.warning.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.warning.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.warning.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.warning.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    error: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.error.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.error.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.error.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.error.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    black: {
      "&,&:hover": {
        color: "#FFFFFF",
        backgroundColor: theme.palette.black.main,
        boxShadow: `0 2px 2px 0 ${chroma(theme.palette.black.main)
          .alpha(0.14)
          .css()}, 0 3px 1px -2px ${chroma(theme.palette.black.main)
          .alpha(0.2)
          .css()}, 0 1px 5px 0 ${chroma(theme.palette.black.main)
          .alpha(0.12)
          .css()}`,
      }
    },
    alignCenter: {
      alignItems: "center",
      justifyContent: "center"
    },
    tabWrapper: {
      color: "inherit",
      position: "relative",
      fontSize: "12px",
      lineHeight: "24px",
      fontWeight: "500",
      textTransform: "uppercase",
      "&,& *": {
        letterSpacing: "normal"
      }
    }
  });
  
  export default navPillsStyle;