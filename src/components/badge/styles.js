import chroma from "chroma-js"

const badgeStyle = theme => ({
    badge: {
      marginRight: "3px",
      borderRadius: "12px",
      padding: "5px 12px",
      textTransform: "uppercase",
      fontSize: "10px",
      fontWeight: "500",
      lineHeight: "1",
      color: "#fff",
      textAlign: "center",
      whiteSpace: "nowrap",
      verticalAlign: "baseline",
      display: "inline-block",
      width: "fit-content"
    },
    primary: {
      backgroundColor: theme.palette.primary.main
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main
    },
    warning: {
      backgroundColor: theme.palette.warning.main
    },
    error: {
      backgroundColor: theme.palette.error.main
    },
    success: {
      backgroundColor: theme.palette.success.main
    },
    info: {
      backgroundColor: theme.palette.info.main
    },
    black: {
      backgroundColor: theme.palette.black.main
    },
    gray: {
      backgroundColor: "#6c757d"
    },
    simple: {
      "&,&:focus,&:hover,&:visited": {
        color: "#FFFFFF",
        background: "transparent",
      },
      "&$primary": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.primary.main,
        },
      },
      "&$secondary": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.secondary.main,
        },
      },
      "&$info": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.info.main,
        },
      },
      "&$success": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.success.main,
        },
      },
      "&$warning": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.warning.main,
        },
      },
      "&$black": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.black.main,
        },
      },
      "&$error": {
        "&,&:focus,&:hover,&:visited": {
          color: theme.palette.error.main,
        },
      },
    },
  });
  
  export default badgeStyle;
  