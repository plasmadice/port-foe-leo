import React from "react";
import Header from "./Header";
import { Container, useTheme, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();

  // provides access to theme object in development
  const isWindowContext = typeof window !== "undefined";
  if (isWindowContext && process.env.NODE_ENV === "development") {
    window.theme = theme;
  }

  return (
    <Container disableGutters maxWidth={false} className={classes.root}>
      <Header />
      {children}
      <p>Footer</p>
    </Container>
  );
};

export default Layout;
