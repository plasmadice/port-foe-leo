import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1333a6",
    },
    secondary: {
      main: "#317ae1",
    },
    // background: {
    //   default: theme.palette.grey[100],
    // },
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
});

export default theme;
