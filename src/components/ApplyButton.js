import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

function ApplyButton({ jdLink }) {
  return (
    <Stack spacing={2} direction="row" width={"100%"}>
      <a href={jdLink} style={{ textDecoration: "none", width: "100%" }}>
        <ColorButton
          variant="contained"
          style={{
            width: "100%",
            borderRadius: "11px",
            padding: "11px",
            color: "black",
            backgroundColor: "#55efc4",
            textTransform: "capitalize",
          }}
        >
          ⚡ Easy Apply
        </ColorButton>
      </a>
    </Stack>
  );
}

export default ApplyButton;
