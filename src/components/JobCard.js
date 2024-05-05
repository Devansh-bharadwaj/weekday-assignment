import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ApplyButton from "./ApplyButton";
import styled from "styled-components";
import { Box } from "@mui/material";
import FullJobDescription from "./FullJobDescription";

const MaskedBox = styled(Box)`
  height: 250px;
  overflow: hidden;
  mask-image: linear-gradient(
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
`;

const ShowMoreBox = styled(Box)`
  position: relative;
`;

function JobCard({
  logo,
  jobTitle,
  companyName,
  jobDescription,
  location,
  minExp,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        borderRadius: "20px",
        height: "100%",
        position: "relative",
        marginTop: "40px",
      }}
    >
      <CardHeader
        style={{ alignItems: "flex-start" }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={logo} alt="company logo" className="img-fluid" />
          </Avatar>
        }
        title={
          <Typography
            style={{ fontSize: "15px", color: "gray", fontWeight: "600" }}
          >
            {companyName}
          </Typography>
        }
        subheader={
          <>
            <Typography
              variant="subtitle1"
              style={{ textTransform: "capitalize" }}
            >
              {jobTitle?.toLowerCase() === "frontend" ||
              jobTitle?.toLowerCase() === "ios" ||
              jobTitle?.toLowerCase() === "android" ||
              jobTitle?.toLowerCase() === "backend"
                ? jobTitle + " Developer"
                : jobTitle}
            </Typography>
            <Typography
              variant="body2"
              style={{
                fontSize: "13px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              {location}
            </Typography>
          </>
        }
      />
      <CardContent style={{ marginBottom: "20px" }}>
        <MaskedBox>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              textAlign: "justify",
            }}
          >
            {jobDescription}
          </Typography>
        </MaskedBox>
        <ShowMoreBox>
          <Typography
            onClick={handleClickOpen}
            style={{
              position: "absolute",
              top: "-12px",
              color: "blue",
              letterSpacing: "1px",
              fontSize: "15px",
              left: "50%",
              transform: "translatex(-50%)",
              cursor: "pointer",
            }}
          >
            Show More
          </Typography>
          <FullJobDescription
            open={open}
            handleClose={handleClose}
            jobDescription={jobDescription}
          />
        </ShowMoreBox>
        {minExp && (
          <>
            <Typography
              style={{
                fontSize: "13px",
                color: "gray",
                letterSpacing: "1px",
                fontWeight: "600",
                marginTop: "20px",
              }}
            >
              Minimum Experience
            </Typography>
            <Typography style={{ fontSize: "14px" }}>{minExp} Years</Typography>
          </>
        )}
      </CardContent>
      <CardActions
        style={{
          padding: "13px 17px",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <ApplyButton />
      </CardActions>
    </Card>
  );
}

export default JobCard;
