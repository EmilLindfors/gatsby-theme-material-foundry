import React from "react";
// nodejs library to set properties for components

// @material-ui/core components
import {withStyles} from "@material-ui/core/styles/"
import { Typography } from "@material-ui/core";
// core components
import typographyStyle from "./styles";
import classNames from "classnames";

function StyledTypography({ ...props }) {
  const {
    classes,
    black,
    primary,
    secondary,
    info,
    success,
    error,
    small,
    muted,
    warning,
    className,
    children,
    ...rest
  } = props;
  const textClasses = classNames({
    [classes.smallTitle]: small,
    [classes.mutedTitle]: muted,
    [classes.blackTitle]: black,
    [classes.secondaryTitle]: secondary,
    [classes.infoTitle]: info,
    [classes.successTitle]: success,
    [classes.errorTitle]: error,
    [classes.warningTitle]: warning,
    [classes.primaryTitle]: primary,
    [className]: className !== undefined
  });

  return (
    <Typography {...rest} className={classes.title + " " + textClasses}>
      {children}
    </Typography>
  );
}

export default withStyles(typographyStyle)(StyledTypography);
