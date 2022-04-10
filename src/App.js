import React, { useState } from "react";
import { Grid, makeStyles, Modal, Typography } from "@material-ui/core";
import NavBar from "./components/NavBar";
import LeftBar from "./components/LeftBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  itemRightBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <Grid container>
        <Grid item sm={1} xs={2} md={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={11} xs={10} md={7}>
          <Feed />
        </Grid>
        <Grid item md={3} className={classes.itemRightBar}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
}

export default App;
