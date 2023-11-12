import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Button, IconButton, Typography } from "@mui/material";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";

export default function SearchLine() {
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
        options={languages}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Язык программирования" />
        )}
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

const algorithms = [
  { label: "Сортировка пузырьком", id: 0 },
  { label: "Бинарный поиск", id: 1 },
  { label: "Быстрая сортировка", id: 2 },
  { label: "Cортировка слиянием", id: 3 },
  { label: "Кодирование Хаффмена", id: 4 },
  { label: "Поиск в ширину", id: 5 },
  { label: "Поиск в глубину", id: 6 },
  { label: "Градиентный спуск", id: 7 },
  { label: "Обмен ключами Диффи-Хеллмана", id: 8 },
  { label: "Алгоритм Дейкстры", id: 9 },
  { label: "Сортировка выбором", id: 10 },
  { label: "Сортировка вставками", id: 11 },
  { label: "Пирамидальная сортировка", id: 12 },
  { label: "Топологическая сортировка", id: 13 },
  { label: "Сортировка кучей", id: 14 },
];

const languages = [
  { label: "Python", id: 0 },
  { label: "C++", id: 1 },
  { label: "Java", id: 2 },
  { label: "JavaScript", id: 3 },
  { label: "C", id: 4 },
  { label: "Rust", id: 5 },
  { label: "Go", id: 6 },
  { label: "Haskel", id: 7 },
  { label: "Assembler 64", id: 8 },
  { label: "Swift", id: 9 },
  { label: "Kotlin", id: 10 },
  { label: "Fortrun", id: 11 },
];
