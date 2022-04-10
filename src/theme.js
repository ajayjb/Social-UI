import { createTheme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
  myButton: {
    backgroundColor: green[500],
    color: "#fff",
    margin: "2rem",
  },
});

export default theme;
