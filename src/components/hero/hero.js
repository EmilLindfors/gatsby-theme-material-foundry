import React from "react"
import Button from "../button"
import {Section} from "../section"
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Hidden,
} from "@material-ui/core"
import { useTheme } from "@material-ui/styles"
import HeroSvg from "./herosvg"

const useStyles = makeStyles(theme => ({
  hero: { height: "500px" },
  heroInner: { height: "100%" },
  heroSvg: { fill1: "white" },
}))

function Hero({ svg, title, subtitle, color, button, ...props }) {
  const classes = useStyles()
  const theme = useTheme()
  if (svg) {
    return (
      <Section {...props}>
        <Container>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            direction="row"
            className={classes.heroInner}
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" component="h1">
                {title}
              </Typography>
              <Typography variant="subtitle1" component="h3">
                {subtitle}
              </Typography>
              <br />
              {button && (
                <Button
                  color={color}
                  size="lg"
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  {button.text}
                </Button>
              )}
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} sm={4}>
                <HeroSvg
                  width={300}
                  fill1="white"
                  fill2={theme.palette[color].main}
                  fill3="white"
                  fill4={theme.palette[color].main}
                />
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </Section>
    )
  } else {
    return (
      <Section {...props}>
        <Container className={classes.hero}>
          <Grid
            container
            justify="center"
            alignItems="center"
            align="center"
            direction="row"
            className={classes.heroInner}
            spacing={3}
          >
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h1">
                {title}
              </Typography>
              <Typography variant="subtitle1" component="h3">
                {subtitle}
              </Typography>

              {button && (
                <Button
                  color={color}
                  size="lg"
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  {button.text}
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </Section>
    )
  }
}

export default Hero
