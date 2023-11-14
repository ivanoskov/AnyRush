import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ResponseDataInterface from "../repositories/ResponseDataInterface";
import React from "react";

interface SearchProps {
  data: ResponseDataInterface;
}

type LanguageInterface = {
  label: string;
  id: string;
};
type AlgorithmInterface = {
  label: string;
  id: string;
  languages: Array<LanguageInterface>;
};

type SearchLineProps = {
  data: SearchProps;
};

type SearchLineState = {
  algorithm: AlgorithmInterface | null;
  language: AlgorithmInterface | null;
  algorithms: Array<AlgorithmInterface>;
};

export default function SearchLine({ data }: SearchProps) {
  const [algorithm, setAlgorithm] = useState<AlgorithmInterface | null>(null);
  const [language, setLanguage] = useState<LanguageInterface | null>(null);
  const navigate = useNavigate();

  const algorithms: Array<AlgorithmInterface> = [];
  for (let alg_index = 0; alg_index < data.algorithms.length; alg_index++) {
    const alg = data.algorithms[alg_index];
    algorithms.push({ label: alg.label, id: alg.id, languages: [] });
    console.log(data.algorithms.length);
    for (
      let lang_index = 0;
      lang_index < data.algorithms[alg_index].languages.length;
      lang_index++
    ) {
      const lang = data.algorithms[alg_index].languages[lang_index];
      algorithms[alg_index].languages.push({
        label: lang.language,
        id: lang.id,
      });
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={algorithms}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Алгоритм" />}
        onChange={(event: any, newValue: AlgorithmInterface | null) => {
          setAlgorithm(null);
          setAlgorithm(newValue);
        }}
      />
      <Box
        sx={{
          display: "flex",
          px: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          /
        </Typography>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={algorithm ? algorithm.languages : []}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Язык программирования" />
        )}
        onChange={(event: any, newValue: LanguageInterface | null) => {
          setLanguage(null);
          setLanguage(newValue);
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            my: 1,
            mx: 2,
            height: "100%",
            backgroundColor: "#eeeeee",
          }}
          onClick={() => {
            navigate("/" + algorithm?.id + "/" + language?.id);
          }}
        >
          <KeyboardReturnRoundedIcon
            sx={{
              color: "black",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
}

// class SearchLine1({ data }: SearchProps)  {
//   const [algorithm, setAlgorithm] = useState<AlgorithmInterface | null>(null);
//   const [laguage, setLaguage] = useState<AlgorithmInterface | null>(null);
//   const [algorithms, setAlgorithms] = useState<Array<AlgorithmInterface>>([]);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//       }}
//     >
//       <Autocomplete
//         disablePortal
//         id="combo-box-demo"
//         options={algorithms}
//         sx={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Алгоритм" />}
//         onChange={(event: any, newValue: AlgorithmInterface | null) => {
//           setAlgorithm(newValue);
//         }}
//       />
//       <Box
//         sx={{
//           display: "flex",
//           px: 2,
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: "bold",
//           }}
//         >
//           /
//         </Typography>
//       </Box>
//       <Autocomplete
//         disablePortal
//         id="combo-box-demo"
//         // options={languages}
//         sx={{ width: 300 }}
//         renderInput={(params) => (
//           <TextField {...params} label="Язык программирования" />
//         )}
//       />
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Button
//           sx={{
//             my: 1,
//             mx: 2,
//             height: "100%",
//             backgroundColor: "#eeeeee",
//           }}
//           onClick={() => {
//             // navigate("/" + +"/");
//           }}
//         >
//           <KeyboardReturnRoundedIcon
//             sx={{
//               color: "black",
//             }}
//           />
//         </Button>
//       </Box>
//     </Box>
//   );
// }
