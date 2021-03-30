import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Scrollbars } from "react-custom-scrollbars";
import { createMuiTheme, ThemeProvider, useTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import "@fontsource/poppins";

const theme = createMuiTheme((theme) => ({
  palette: {
    primary: {
      main: "#1333a6",
    },
    secondary: {
      main: "#317ae1",
    },
    background: {
      default: theme.palette.grey[100],
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial"`,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 960,
      lg: 1180,
      xl: 1920,
    },
  },
}));

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // provides access to theme object in development
  const isWindowContext = typeof window !== "undefined";
  if (isWindowContext && process.env.NODE_ENV === "development") {
    const theme = useTheme();
    window.theme = theme;
  }

  const renderThumb = ({ style, props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "rgba(35, 49, 86, 0.8)",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Herman White | dev boi</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Scrollbars
          style={{ width: "100vw", height: "100vh", background: "#ebebeb" }}
          renderThumbVertical={renderThumb}
          universal={true}
        >
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </Scrollbars>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
