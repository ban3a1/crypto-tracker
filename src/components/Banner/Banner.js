import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundColor: "#00001a",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    textAlign: "center",
  },
}));

function Banner(props) {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              fontFamily: "Montserrat",
              marginBottom: 15,
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography variant="subtitle2" style={{ fontFamily: "Montserrat" }}>
            Get All Info Regarding Your Favourite Crypto Currency
          </Typography>
        </div>
        <Carousel></Carousel>
      </div>
    </div>
  );
}

export default Banner;
