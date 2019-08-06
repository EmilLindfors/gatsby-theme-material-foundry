import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import badgeStyle from "./styles";

function Badge({ ...props }) {
  const { classes, color, children } = props;
  return (
    <span className={classes.badge + " " + classes[color]}>{children}</span>
  );
}

export default withStyles(badgeStyle)(Badge);
