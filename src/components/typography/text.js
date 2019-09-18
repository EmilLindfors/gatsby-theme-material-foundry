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
    [classes.small]: small,
    [classes.muted]: muted,
    [classes.black]: black,
    [classes.secondary]: secondary,
    [classes.info]: info,
    [classes.success]: success,
    [classes.error]: error,
    [classes.warning]: warning,
    [classes.primary]: primary,
    [className]: className !== undefined
  });

  return (
    <Typography {...rest} className={classNames(textClasses)}>
      {children}
    </Typography>
  );
}

export default withStyles(typographyStyle)(StyledTypography);
