import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import Section from "./section";

const useStyles = makeStyles(theme => ({
  hero: { height: "100%" },
  heroInner: { height: "100%" },
  heroSvg: { fill1: "white" }
}));

export function DividedSection({ full, children, ...props }) {
  const classes = useStyles();
  const numChildren = React.Children.count(children);
  const smallSize = Math.round(12 / numChildren);
  if (full) {
    return (
      <Section {...props}>
        <Grid
          container
          justify="space-evenly"
          alignItems="center"
          direction="row"
          className={classes.heroInner}
          spacing={3}
        >
          {React.Children.map(children, child => (
            <Grid
              item
              xs={numChildren > 4 ? 4 : numChildren > 3 ? 6 : 12}
              sm={numChildren > 8 ? smallSize * 2 : smallSize}
              p={2}
            >
              {child}
            </Grid>
          ))}
        </Grid>
      </Section>
    );
  } else {
    return (
      <Section {...props}>
        <Container className={classes.heroInner}>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            direction="row"
            className={classes.heroInner}
            spacing={3}
          >
            {React.Children.map(children, child => (
              <Grid
                item
                xs={numChildren > 4 ? 4 : numChildren > 3 ? 6 : 12}
                sm={numChildren > 8 ? smallSize * 2 : smallSize}
                p={2}
              >
                {child}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    );
  }
}

export default DividedSection;
