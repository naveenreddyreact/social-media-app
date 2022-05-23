import Feed from "./Components/Feed";
import NavBar from "./Components/NavBar";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";
import Stack from "@mui/material/Stack";
import { Box, createTheme } from "@mui/system";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [Mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: Mode,
    },
  });
  return (
    <Box>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
