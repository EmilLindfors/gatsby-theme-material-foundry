import React from "react";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles/"
import style from "./styles";

function Section({ ...props }) {
  const {
    black,
    primary,
    secondary,
    info,
    success,
    error,
    image,
    warning,
    classes,
    children,
    className,
    ...rest
  } = props;
  const sectionClasses = classNames({
    [classes.black]: black,
    [classes.secondary]: secondary,
    [classes.info]: info,
    [classes.success]: success,
    [classes.error]: error,
    [classes.warning]: warning,
    [classes.primary]: primary,
    [className]: className !== undefined
  });
  if(image){
  return (
    <section
      style={{
        ...rest,
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover"
      }}
      className={sectionClasses}
    >
      {children}
    </section>
  )}
  else {
    return(
    <section
    style={{
      ...rest
    }}
    className={sectionClasses}
  >
    {children}
  </section>)
  }
}

export default withStyles(style)(Section);
