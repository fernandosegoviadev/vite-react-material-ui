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
          flexDirection: "row",
          "@media only screen and (max-width: 900px) and (min-width: 320px)": {
            flexDirection: "column",
            width: "100%",
          },
        }}
      >
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <LocationOnIcon />
            {location && (
              <Typography
                sx={{
                  "@media only screen and (max-width: 900px) and (min-width: 320px)":
                    {
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    },
                }}
              >
                {location}
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
            <TwitterIcon />

            {twitter_username === null ? (
              <Typography>{"Not Available"}</Typography>
            ) : (
              <a target="_blank" href={`https://twitter.com/${twitter_username}`}>
                <Typography>@{twitter_username}</Typography>
              </a>
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
                <Typography>Blog/portfolio</Typography>
              </a>
            )}
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" spacing={2}>
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
