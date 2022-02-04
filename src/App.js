import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./routes/routes";
import { Home } from "./views";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        {authRoutes.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
