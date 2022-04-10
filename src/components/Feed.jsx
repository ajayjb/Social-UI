import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Posts from "./Posts";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(11),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(9),
    },
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Posts url="https://mp.reshift.nl/zoom/6EE65F77986C32DA60D70FCB970ED5FA-green-lizard.jpg?w=1132" />
      <Posts url="https://images.takeshape.io/eec0d9cd-dc81-4ba8-ac20-50da147f43d2/dev/e1e9a063-240d-4531-bcee-9a8416868939/bg-pride-lions-snarling.jpg?auto=compress%2Cformat" />
      <Posts url="https://en-media.thebetterindia.com/uploads/2020/06/lifestyle-2020-06-03T201400.032.jpg?compress=true&quality=95&w=360&dpr=2.6" />
      <Posts url="https://30txqa38zb7h2db3bbcpzb1x-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/types-of-tigers.jpg" />
    </Container>
  );
};

export default Feed;
