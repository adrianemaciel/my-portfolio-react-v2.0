import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <About />
        {/* <Projects />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
