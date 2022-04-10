import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  RadioGroup,
  TextField,
  Radio,
  Button,
  Snackbar,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  add: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  container: {
    width: 500,
    height: 570,
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)",
    padding: "15px",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 570,
      backgroundColor: "white",
      position: "absolute",
      top: "50%",
      right: "50%",
    },
  },
  itemButton: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    border: "1px solid #CEC9C9",
  },
}));

const cat = [
  {
    value: "Private",
    label: "Private",
  },
  {
    value: "Public",
    label: "Public",
  },
  {
    value: "Unlisted",
    label: "Unlisted",
  },
];

const Add = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const vertical = "bottom";
  const horizontal = "left";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <>
      <Tooltip title="Add" onClick={handleOpen} aria-label="add">
        <Fab color="primary" className={classes.add}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <form className={classes.from} autoComplete="off">
            <div className="item">
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                size="small"
                style={{ width: "100%", marginBottom: "15px" }}
              />
            </div>
            <div className="item">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                size="small"
                minRows={5}
                variant="outlined"
                style={{ width: "100%", marginBottom: "15px" }}
              />
            </div>
            <div className="item">
              <TextField
                select
                label="Select Post Type"
                value={"Public"}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                variant="outlined"
                style={{ width: "100%", marginBottom: "15px" }}
              >
                {cat.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div
              style={{
                marginBottom: "15px",
                display: "flex",
                justifyContent: "flex-end",
              }}
              className="item"
            >
              <label htmlFor="raised-button-file">
                <Button
                  className={classes.image}
                  component="span"
                  color="primary"
                >
                  <CloudUploadIcon />
                  &nbsp; Upload Image
                </Button>
              </label>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
              />
            </div>
            <div className="item">
              <FormControl component="fieldset">
                <FormLabel component="legend">Who can comment</FormLabel>
                <RadioGroup aria-label="Everybody" value="Everybody">
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My friends"
                    control={<Radio />}
                    label="My friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio />}
                    label="Nobody"
                  />
                  <FormControlLabel
                    value="Custom"
                    disabled
                    control={<Radio />}
                    label="Custom (Premium)"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="item">
              <div className={classes.itemButton}>
                <Button
                  className={classes.buttonCreate}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setOpenSnack(true);
                    setOpen(false);
                  }}
                >
                  Create
                </Button>
                <Button
                  className={classes.buttonCreate}
                  variant="outlined"
                  color="secondary"
                  style={{ marginLeft: "15px" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openSnack}
        autoHideDuration={2000}
        onClose={handleSnackClose}
      >
        <Alert onClose={handleSnackClose} severity="success">
          Post Created Succefully
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
