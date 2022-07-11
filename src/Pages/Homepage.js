import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import { CryptoState } from "../CryptoContext";
import { Navigate } from "react-router-dom";

function Homepage(props) {
  const { currency } = CryptoState();

  if (currency === "undef") return <Navigate to="/" />;
  return (
    <>
      <Banner />
      <CoinsTable />
    </>
  );
}

export default Homepage;
