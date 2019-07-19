const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
}

const customInputStyle = theme => ({
  disabled: {
    "&:before": {
      borderColor: "transparent !important",
    },
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: theme.palette.warning.main,
    },
  },
  underlineError: {
    "&:after": {
      borderColor: theme.palette.error.main,
    },
  },
  underlineSuccess: {
    "&:after": {
      borderColor: theme.palette.success.main,
    },
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF",
    },
    "&:after": {
      borderColor: "#FFFFFF",
    },
  },
  labelRoot: {
    ...defaultFont,
    color: "#AAAAAA !important",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    "& + $underline": {
      marginTop: "0px",
    },
  },
  labelRootError: {
    color: theme.palette.error.main + " !important",
  },
  labelRootSuccess: {
    color: theme.palette.success.main + " !important",
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: theme.palette.primary.main,
    },
  },
  input: {
    color: theme.palette.primary.main,
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1",
    },
    "&::placeholder": {
      color: "#AAAAAA",
    },
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1",
    },
  },
})

export default customInputStyle
