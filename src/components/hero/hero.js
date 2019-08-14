import React from "react"
import {Section, Title, Text, Button} from "../"
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
        <Container  className={classes.heroInner}>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            direction="row"
            className={classes.heroInner}
            spacing={3}
          >
            <Grid item xs={12} sm={4}>
              <Title variant="h3" component="h1">
                {title}
              </Title>
              <Text variant="h5" component="h3">
                {subtitle}
              </Text>
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
                  fill1={color ? "white" : "black"}
                  fill2={theme.palette[color].main}
                  fill3={color ? "white" : "black"}
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
              <Title variant="h3" component="h1">
                {title}
              </Title>
              <Text variant="h5" component="h3">
                {subtitle}
              </Text>

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
