import {
    defaultFont,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    title,
    secondaryColor
  } from "../styles";
  
  const typographyStyle = {
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
      color: primaryColor,
      ...defaultFont
    },
    primaryTitle: {
      color: primaryColor,
      ...title
    },
    secondary: {
      color: secondaryColor,
      ...defaultFont
    },
    secondaryTitle: {
      color: secondaryColor,
      ...title
    },
    info: {
      color: infoColor,
      ...defaultFont
    },
    infoTitle: {
      color: infoColor,
      ...title
    },
    success: {
      color: successColor,
      ...defaultFont
    },
    successTitle: {
      color: successColor,
      ...title
    },
    warning: {
      color: warningColor,
      ...defaultFont
    },
    warningTitle: {
      color: warningColor,
      ...title
    },
    error: {
      color: dangerColor,
      ...defaultFont
    },
    errorTitle: {
      color: dangerColor,
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
  };
  
  export default typographyStyle;
  