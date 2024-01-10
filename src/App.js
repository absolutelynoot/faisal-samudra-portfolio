import './App.css';
import * as React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";

// Component
import Home from "./components/Home";
import DarkModeToggle from "./components/DarkModeToggle";
import DrawerAppBar from './components/DrawerAppBar';


function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DrawerAppBar/>
      <DarkModeToggle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
