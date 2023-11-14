import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import api from "../api";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

interface AlgorithmPageProps {
  algorithm: string;
  language: string;
}

const AlgorithmPage = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const props = useLoaderData() as AlgorithmPageProps;
  const [value, setValue] = useState<string>("");
  const navigate = useNavigate();

  const handleEditorChange = (value: string | undefined) => {
    setValue(value ?? "");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get.data();
      console.log(response);
      for (
        let algorithm_index = 0;
        algorithm_index < response.algorithms.length;
        algorithm_index++
      ) {
        const algorithm = response.algorithms[algorithm_index];
        if (algorithm.id === props.algorithm) {
          for (
            let language_index = 0;
            language_index <
            response.algorithms[algorithm_index].languages.length;
            language_index++
          ) {
            const language =
              response.algorithms[algorithm_index].languages[language_index];
            if (language.id === props.language) {
              const responseCode = await fetch(language.code_url);
              const code = await responseCode.text();
              setValue(code);
            }
          }
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Button sx={{position: "fixed", top: "20vh", right: "81%"}} onClick={()=>{navigate("/")}}><ArrowBackRoundedIcon/></Button>
      <Editor
        loading="Грузим кодов.."
        height="60vh"
        width={`100%`}
        language={props.language || "javascript"}
        value={value ?? ""}
        theme={prefersDarkMode === true ? "vs-dark" : "vs"}
        defaultValue="// some comment"
        onChange={handleEditorChange}
        options={{ readOnly: true }}
      />
    </>
  );
};
export default AlgorithmPage;
