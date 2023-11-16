import { Autocomplete, TextField } from "@mui/material";
import React from "react";

type LanguageInterface = {
  label: string;
  id: string;
};

type AlgorithmInterface = {
  label: string;
  id: string;
  languages: Array<LanguageInterface>;
};

interface LanguageInputInterface {
  algorithm: AlgorithmInterface | null;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageInterface | null>>;
}

export default function LanguageInput({
  algorithm,
  setLanguage,
}: LanguageInputInterface) {
  return (
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
  );
}
