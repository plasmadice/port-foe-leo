import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Scrollbars } from "react-custom-scrollbars";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";

import "@fontsource/poppins";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const renderThumb = ({ style, props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "rgba(35, 49, 86, 0.8)",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  
  const hideThumb = ({ style, props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "rgba(35, 49, 86, 0.8)",
    };
    return <></>;
  };

  return (
    <>
      <Head>
        <title>Herman White | Software Engineer</title>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="author" content="Herman White" />

        {/* general meta tags */}
        <meta
          property="og:title"
          content="Herman White | Software Engineer"
        />
        <meta name="description" content="Software Engineer" />
        <meta property="og:description" content="Software Engineer" />
        <meta property="og:image" content="https://i.imgur.com/mgVM8C6.jpg" />
        <meta
          name="og:image:alt"
          content="Character from Among Us game floating in space with text: Line 31 was not a Bug. 14 Bugs remain"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://hwhite.dev/" />
      </Head>
      <Scrollbars
        style={{
          width: "100%",
          height: "100vh",
          background: "#ebebeb",
        }}
        renderThumbVertical={renderThumb}
        universal={true}
      >
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Scrollbars>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
