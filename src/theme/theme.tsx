import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    // palette values for light mode
    mode: "dark",
    primary: grey,
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    // palette values for dark mode
    mode: "light",
    primary: grey,
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      default: "#121212",
      paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
  },
});
