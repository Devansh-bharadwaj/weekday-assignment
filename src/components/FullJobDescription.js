import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function FullJobDescription({ open, handleClose, jobDescription }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{ fontWeight: "700", textAlign: "center" }}
        >
          {"Job Description"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{jobDescription}</DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default FullJobDescription;
