import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import NotificationsPage from "./Components/NotificationsPage";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 16,
    },
    fontFamily: "Plus Jakarta Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NotificationsPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
