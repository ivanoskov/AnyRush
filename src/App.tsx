import React, { useEffect, useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Grid, IconButton, useMediaQuery } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import api from "./api";
import type { RESPONSE_DATA } from "./api";

import "./App.css";
import SearchLine from "./components/search_line";
import Header from "./components/header";
import { amber, deepOrange, grey } from "@mui/material/colors";
import CodeEditorWindow from "./components/CodeEditor";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Main() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
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
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <SearchLine />
          <CodeEditorWindow
            onChange={(type, value) => {}}
            language="python"
            code='print("hello world")/r qweqwe'
            theme="vs-dark"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

function App() {
  const [data, setData] = useState<RESPONSE_DATA>();

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get.data();
      setData(response);
    };

    fetchData();
  }, []);

  // return <div className='App'>{data ? <p>{data.greeting}</p> : 'no data'}</div>;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
