import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
  
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import ActionButton from "./ActionButton";
const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(1),
    
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));
export default function PopUp(props) {
  const classes = useStyles();
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ActionButton text="X" color="secondary" onClick={()=>{setOpenPopup(false)}}>
            <Close />
          </ActionButton>
        </div>
      </DialogTitle>
    
      <DialogContent dividers>{children}</DialogContent>
     
    </Dialog>
  );
}
