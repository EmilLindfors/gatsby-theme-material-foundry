import {
    defaultFont,

    title,

  } from "../styles";


const typographyStyle = theme => ({
  
    defaultFontStyle: {
      ...defaultFont,
      fontSize: "14px"
    },
    defaultHeaderMargins: {
      marginTop: "20px",
      marginBottom: "10px"
    },
    quote: {
      padding: "10px 20px",
      margin: "0 0 20px",
      fontSize: "17.5px",
      borderLeft: "5px solid #eee"
    },
    quoteText: {
      margin: "0 0 10px",
      fontStyle: "italic"
    },
    quoteAuthor: {
      display: "block",
      fontSize: "80%",
      lineHeight: "1.42857143",
      color: "#777"
    },
    title: {
      ...title
    },
    muted: {
      color: "#777"
    },
    mutedTitle: {
      color: "#777",
      ...title
    },
    primary: {
      color: theme.palette.primary.main,
      ...defaultFont
    },
    primaryTitle: {
      color: theme.palette.primary.main,
      ...title
    },
    secondary: {
      color: theme.palette.secondary.main,
      ...defaultFont
    },
    secondaryTitle: {
      color: theme.palette.secondary.main,
      ...title
    },
    info: {
      color: theme.palette.info.main,
      ...defaultFont
    },
    infoTitle: {
      color: theme.palette.info.main,
      ...title
    },
    success: {
      color: theme.palette.success.main,
      ...defaultFont
    },
    successTitle: {
      color: theme.palette.success.main,
      ...title
    },
    warning: {
      color: theme.palette.warning.main,
      ...defaultFont
    },
    warningTitle: {
      color: theme.palette.warning.main,
      ...title
    },
    error: {
      color: theme.palette.error.main,
      ...defaultFont
    },
    errorTitle: {
      color: theme.palette.error.main,
      ...title
    },
    black: {
      color: theme.palette.black.main,
      ...defaultFont
    },
    blackTitle: {
      color: theme.palette.black.main,
      ...title
    },
    small: {
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
      color: "#777"
    },
    smallTitle: {
      ...title,
      fontSize: "65%",
      lineHeight: "1",
      color: "#777"
    }
  });
  
  export default typographyStyle;
  