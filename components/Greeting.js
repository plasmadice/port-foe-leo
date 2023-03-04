import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  invertedContainer: {
    position: "relative",
    padding: "100px 0 220px",
    top: "-2px",
    color: "white",
    textAlign: "center",
    background: "rgb(19,51,166)",
  },
  invertedText: {
    color: "white",
    paddingBottom: theme.spacing(8),
  },
  invertedSubText: {
    color: "white",
    lineHeight: "2rem",
    fontSize: "1.2rem",
  },
}));

const Greeting = () => {
  const classes = useStyles();

  return (
    <div className={classes.invertedContainer}>
      <Container fixed disableGutters>
        <Typography
          component="div"
          variant="h4"
          className={classes.invertedText}
        >
          {"Hi, I’m Herman. Nice to meet you."}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          className={classes.invertedSubText}
        >
          {"I'm an experienced software engineer based in Florida. I have worked with start-ups and DoD and non-profits. Solving everyone's issues using modern code and tools is the dream. Let's build tomorrow... together!"}
        </Typography>
      </Container>
    </div>
  );
};

export default Greeting;
