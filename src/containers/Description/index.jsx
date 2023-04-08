import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation";
import LocationInformation from "../LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;
  
  return (
    <Fragment>
      <Stack
      sx={{
        justifyContent: 'center'
      }}>
        {bio === null ? (
          <Typography
          variant="body1">{"The user has not a bio."}</Typography>
        ) : (
          <Typography
          variant="body1">{bio}</Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  );
};

export default Description;
