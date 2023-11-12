import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { AccountCircle } from "@mui/icons-material";
import DataObjectIcon from "@mui/icons-material/DataObject";

interface HeaderProos {
  theme: Theme;
  colorMode: {
    toggleColorMode: () => void;
  };
}

export default function Header({ theme, colorMode }: HeaderProos) {
  return (
      <AppBar position="static" sx={{
        position: "absolute",
      }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              pr: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DataObjectIcon />
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Any-algorithm
          </Typography>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}
