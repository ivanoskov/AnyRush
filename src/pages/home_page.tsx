import React, { useEffect, useState } from "react";
import ResponseDataInterface from "../repositories/ResponseDataInterface";
import api from "../api";
import SearchBlock from "../components/search_block";
import { Box, Button, Grid } from "@mui/material";
import Header from "../components/header";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function HomePage() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", minWidth: "100%" }}
      >
        <Box>
          <Button sx={{ m: 1, py: 2, px: 4 }} variant="outlined">
            {" "}
            Поиск реализации алгоритмов <KeyboardArrowRightRoundedIcon />
          </Button>
          <Button sx={{ m: 1 }} variant="outlined">
            Outlined
          </Button>
          <Button sx={{ m: 1 }} variant="outlined">
            Outlined
          </Button>
        </Box>
        <Box>
          <Button sx={{ m: 1 }} variant="outlined">
            Outlined
          </Button>
          <Button sx={{ m: 1 }} variant="outlined">
            Outlined
          </Button>
          <Button sx={{ m: 1 }} variant="outlined">
            Outlined
          </Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default HomePage;
