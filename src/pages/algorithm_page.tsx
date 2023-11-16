import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import api from "../api";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BugReportIcon from "@mui/icons-material/BugReport";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LanguageDataInterface } from "../repositories/ResponseDataInterface";

interface AlgorithmPageProps {
  algorithm: string;
  language: string;
}

const AlgorithmPage = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const props = useLoaderData() as AlgorithmPageProps;
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<LanguageDataInterface>();
  const navigate = useNavigate();

  const handleEditorChange = (value: string | undefined) => {
    setValue(value ?? "");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get.data();
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
              setLanguage(language);
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
      <Button
        sx={{ position: "absolute", top: "20vh", right: "76%" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackRoundedIcon />
      </Button>
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
      <Box sx={{ position: "absolute", top: "20vh", left: "76%" }}>
        <Box>
          <Tooltip title={language?.tested ? "Код протестирован на разных входных данных ❇️" : "Код не протестирован"}>
            <IconButton aria-label="delete">
              <BugReportIcon color={language?.tested ? "success" : "primary"} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title={language?.checked ? "Алгоритм досканально проверен на правдивость 👌" : "Мы ещё не успели полностью проверить этот код"}>
            <IconButton aria-label="delete">
              <CheckCircleRoundedIcon color={language?.checked ? "success" : "primary"} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Сообщить об ошибке (👆)">
            <IconButton
              aria-label="delete"
              onClick={() => {
                window.open("https://t.me/ivan_noskovvv", "_blank");
              }}
            >
              <ReportRoundedIcon color="warning" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Источник иссходного кода (👆)">
            <IconButton aria-label="delete"
              onClick={() => {
                window.open(language?.source, "_blank");
              }}>
              <GitHubIcon color="primary" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
};
export default AlgorithmPage;
