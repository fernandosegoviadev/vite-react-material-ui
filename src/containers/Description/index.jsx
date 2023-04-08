import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation";
import LocationInformation from "../LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  
  return (
    <Fragment>
      <Stack>
        {bio === null ? (
          <Typography>{"The user has not a bio."}</Typography>
        ) : (
          <Typography>{bio}</Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  );
};

export default Description;
