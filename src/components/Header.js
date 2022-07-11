import React from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CryptoState } from "../CryptoContext";
import { Typography } from "@mui/material";
const color = "gray";

function Header(props) {
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container styles={{}}>
          <Toolbar>
            <Typography
              variant="h4"
              onClick={() => navigate("/")}
              style={{
                color: "gold",
                flex: 1,
                fontFamily: "Montserrat",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Crypto tracker
            </Typography>
            <Select
              defaultValue=""
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{
                color: color,
                border: `solid 1px ${color}`,
                "& .MuiSelect-icon": {
                  color: color,
                },
              }}
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                marginLeft: 5,
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
