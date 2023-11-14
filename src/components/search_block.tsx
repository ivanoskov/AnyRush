import { Grid } from "@mui/material";
import SearchLine from "./search_line";
import AlgorithmPage from "../pages/algorithm_page";
import ResponseDataInterface from "../repositories/ResponseDataInterface";
import React from "react";

interface SearchProps {
  data: ResponseDataInterface;
}

function SearchBlock({ data }: SearchProps) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <React.StrictMode>
          <SearchLine data={data} />
        </React.StrictMode>
        {/* <AlgorithmPage
            code_url={data.algorithms[0].languages[0].code_url}
            theme="vs-dark"
          /> */}
      </Grid>
    </Grid>
  );
}

export default SearchBlock;
