import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiSpeedDial: {
      fab: {
        boxShadow:
          "0px 3px 5px -1px rgb(0 0 0 / 40%), 0px 6px 10px 0px rgb(0 0 0 / 34%), 0px 1px 18px 0px rgb(0 0 0 / 32%)",
      },
    },
  },
  palette: {
    primary: {
      main: "#1333a6",
    },
    secondary: {
      main: "#317ae1",
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
      xl: 1500,
    },
  },
});

export default theme;
