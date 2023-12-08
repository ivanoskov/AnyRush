import {
  Box,
  IconButton,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Header() {
  const theme = useTheme();

  const dispatch = useDispatch();
  return (
    <AppBar
      position="static"
      sx={{
        position: "absolute",

        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
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
          AnyRush!
        </Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleTheme())}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
        </IconButton>
        <Box sx={{ mx: 1 }}></Box>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar alt="Ivan Noskov">I</Avatar>
        </StyledBadge>
        
      </Toolbar>
    </AppBar>
  );
}
