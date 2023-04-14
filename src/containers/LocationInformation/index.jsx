import { Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";

const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "15px",
        }}
      >
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <LocationOnIcon />
            {location && <Typography>{location}</Typography>}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <TwitterIcon />

            {twitter_username === null ? (
              <Typography>{"Not Available"}</Typography>
            ) : (
              <Typography>@{twitter_username}</Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <LanguageIcon />
            {blog === null ? (
              <Typography>{"Not Available"}</Typography>
            ) : (
              <a target="_blank" href={blog}>
                <Typography>{blog}</Typography>
              </a>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack  direction="row" spacing={2}>
            <BusinessIcon />
            {company === null ? (
              <Typography>{"Not Available"}</Typography>
            ) : (
              <Typography>{company}</Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LocationInformation;
