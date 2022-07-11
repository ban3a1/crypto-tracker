import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./Pages/CoinPage";
import Homepage from "./Pages/Homepage";
import { makeStyles } from "@mui/styles";
import { CryptoState } from "./CryptoContext";
import CurrencySelect from "./components/CurrencySelect";

function App() {
  const useStyles = makeStyles({
    App: {
      background: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>
            <Route path="/coins/:id" element={<CoinPage />} />
            <Route path="/*" element={<Navigate to="/" />} />

            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
