import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Notifications, Search } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
import React, { useState } from "react";
import MailIcon from "@material-ui/icons/Mail";

// Styling code
const useStyles = makeStyles((theme) => ({
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      height: "5rem",
    },
  },
  logoSm: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  logoLg: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#A2B38B",
  },
  search: {
    display: "flex",
    alignItems: "center",
    height: "2.5rem",
    width: "50%",
    borderRadius: "5px",
    transition: "0.5s ease-in",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
      height: "2.3rem",
    },
  },
  inputBase: {
    color: "white",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchIconButton: {
    marginRight: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "block"),
    },
  },
  cancel: {
    marginRight: "0.2rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

// Component code
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles({ open });

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          MATERIAL UI
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          MUI
        </Typography>
        <div className={classes.search}>
          <Search className={classes.searchButton} />
          <InputBase className={classes.inputBase} placeholder="Search…" />
          <CancelIcon
            className={classes.cancel}
            onClick={() => {
              setOpen(false);
            }}
          />
        </div>

        <div className={classes.icons}>
          <Search
            className={classes.searchIconButton}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Badge
            badgeContent={4}
            overlap="rectangular"
            className={classes.badge}
            color="secondary"
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={4}
            overlap="rectangular"
            className={classes.badge}
            color="secondary"
          >
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://pbs.twimg.com/profile_images/1462870429186461696/Kq7HrwQf_400x400.jpg"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
