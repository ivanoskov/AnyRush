import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import AlgorithmPage from "./pages/algorithm_page";
import Home from "./pages/home_page";
import React from "react";
import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import Header from "./components/header";
import { grey } from "@mui/material/colors";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: ":algorithm/:language",
    element: <AlgorithmPage />,
    loader: ({ params }) => {
      return params;
    },
  },
]);

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">(
    prefersDarkMode === true ? "dark" : "light"
  );

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
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
              }
            : {
                // palette values for dark mode
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
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Header theme={theme} colorMode={colorMode} />
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", minWidth: "100%" }}
          >
            <Grid item xs={3} sx={{ minWidth: "50%" }}>
              <RouterProvider router={router} />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
