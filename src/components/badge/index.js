import React from "react";
import {withStyles} from "@material-ui/core/styles/"
import badgeStyle from "./styles";
import classNames from "classnames"

function Badge({ ...props }) {
  const {
    classes,
    color,
    children,
    simple,
    className,
    ...rest
  } = props

  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: color,
    [classes.simple]: simple,
    [className]: className,
  })

  return (
    <span  {...rest} className={badgeClasses}>{children}</span>
  );
}

export default withStyles(badgeStyle)(Badge);
