import { ThemeProvider, createTheme } from "@mui/material/styles";
const Theme = createTheme({
  palette: {
    deepPurple: {
      light: "#8561c5",
      main: "#673ab7",
      dark: "#482880",
      contrastText: "#fff",
    },
    red: {
      light: "#ff4569",
      main: "#ff1744",
      dark: "#b2102f",
      contrastText: "#000",
    },
  },
});

export default Theme;
