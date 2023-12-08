import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import AlgorithmPage from "./pages/algorithm_page";
import Home from "./pages/algorithms_page";
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
import HomePage from "./pages/home_page";
import AlgorithmsPage from "./pages/algorithms_page";
import { darkTheme, lightTheme } from "./theme/theme";
import { useSelector, useDispatch } from "react-redux";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [],
  },
  {
    path: "/algs",
    element: <AlgorithmsPage />,
    children: [
      {
        path: "/algs/:algorithm/:language",
        element: <AlgorithmPage />,
        loader: ({ params }) => {
          return params;
        },
        children: [],
      },
    ],
  },
]);

function App() {
  const prefersDarkMode = true;

  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
