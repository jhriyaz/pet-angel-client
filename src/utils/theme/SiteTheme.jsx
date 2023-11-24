import { ThemeProvider, createTheme } from "@mui/material";

let customTheme = createTheme({
  palette: {
    primary: {
      main: "#f4cea7",
    },
    secondary: {
      main: "#D1A87D"
    },
    button: {
      main: "#f38005"
    },
  },
});
const SiteTheme = ({ children }) => {
  return <ThemeProvider  theme={customTheme}>{children}</ThemeProvider>;
};

export default SiteTheme;
