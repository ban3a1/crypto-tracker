import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router";

import {
  TableContainer,
  LinearProgress,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import "../App.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
  },
}));

function TableComp(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <TableContainer>
      {props.loading ? (
        <LinearProgress style={{ backgroundColor: "gold" }} />
      ) : (
        <Table>
          <TableHead style={{ backgroundColor: "#EEBC1D" }}>
            <TableRow>
              {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                <TableCell
                  style={{
                    color: "black",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                  }}
                  key={head}
                  align={head === "Coin" ? "left" : "right"}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {props
              .handleSearch()
              .slice((props.page - 1) * 10, (props.page - 1) * 10 + 10)
              .map((row) => {
                const profit = row.price_change_percentage_24h > 0;

                return (
                  <TableRow
                    key={row.id}
                    onClick={() => navigate(`/coins/${row.id}`)}
                    className={classes.row}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      styles={{
                        display: "flex",
                        gap: 15,
                      }}
                    >
                      <img
                        src={row?.image}
                        height="50"
                        alt=""
                        style={{ marginBottom: 10 }}
                      />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            textTransform: "uppercase",
                            fontSize: 22,
                            color: "grey",
                          }}
                        >
                          {row.symbol}
                        </span>
                        <span style={{ color: "grey" }}>{row.name}</span>
                      </div>
                    </TableCell>
                    <TableCell align="right" style={{ color: "grey" }}>
                      {props.symbol} {row.current_price.toFixed(2)}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    >
                      {profit && "+"}
                      {row.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell align="right" style={{ color: "grey" }}>
                      {props.symbol} {row.market_cap.toString().slice(0, -6)}M
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}

export default TableComp;
