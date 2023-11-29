import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const NameDialog = ({ open, handleClose, name, handleNameChange }) => {
  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") handleClose();
      }}
      disableEscapeKeyDown
    >
      <DialogTitle>Enter Your Name</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your name to continue.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
          onKeyDown={(event) => {
            if (event.keyCode === 13 && name !== "") {
              handleClose();
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(event) => {
            if (name !== "") handleClose();
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NameDialog;
