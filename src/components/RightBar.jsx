import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(11),
    height: "100vh",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("md")]: {
      backgroundColor: "white",
      border: "1px solid #DFDADA",
      color: "#999",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(9),
    },
  },

  title: {
    fontSize: "16x",
    fontWeight: "600",
    color: "#555",
    minWidth: 120,
    textAlign: "center",
    marginBottom: "10px",
  },
  friends: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "25px",
  },
  gallary: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px",
  },
  img: {
    borderRadius: 5,
  },
  cat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  divLink: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
    textAlign: "center",
  },
}));

const RightBar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.friends}>
        <Typography className={classes.title}>Online Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </div>
      <div className={classes.gallary} style={{ marginTop: "20px" }}>
        <Typography className={classes.title}>Gallary</Typography>
        <ImageList className={classes.imageList} rowHeight={100} cols={3}>
          <ImageListItem>
            <img
              className={classes.img}
              src={"https://v4.mui.com/static/images/image-list/breakfast.jpg"}
              alt={"source"}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              className={classes.img}
              src={"https://v4.mui.com/static/images/image-list/burgers.jpg"}
              alt={"source"}
            />
          </ImageListItem>

          <ImageListItem>
            <img
              className={classes.img}
              src={"https://v4.mui.com/static/images/image-list/camera.jpg"}
              alt={"source"}
            />
          </ImageListItem>

          <ImageListItem>
            <img
              className={classes.img}
              src={"https://v4.mui.com/static/images/image-list/morning.jpg"}
              alt={"source"}
            />
          </ImageListItem>

          <ImageListItem>
            <img
              className={classes.img}
              src={"https://v4.mui.com/static/images/image-list/hats.jpg"}
              alt={"source"}
            />
          </ImageListItem>

          <ImageListItem>
            <img
              className={classes.img}
              src={"https://v4.mui.com/static/images/image-list/honey.jpg"}
              alt={"source"}
            />
          </ImageListItem>
        </ImageList>
      </div>
      <div className="cat">
        <Typography className={classes.title}>Categories</Typography>
        <div className={classes.divLink}>
          <Link className={classes.link} href="#" variant="body2">
            Science
          </Link>
          <Link className={classes.link} href="#" variant="body2">
            Art
          </Link>
          <Link className={classes.link} href="#" variant="body2">
            Ecommerce
          </Link>
        </div>
        <div className={classes.divLink}>
          <Link className={classes.link} href="#" variant="body2">
            Gaming
          </Link>
          <Link className={classes.link} href="#" variant="body2">
            Sport
          </Link>
          <Link className={classes.link} href="#" variant="body2">
            Technology
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default RightBar;
