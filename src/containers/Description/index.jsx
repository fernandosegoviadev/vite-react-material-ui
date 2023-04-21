import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../PaperInformation";
import LocationInformation from "../LocationInformation";

const Description = (props) => {
  const { userState } = props;
  const { bio, login } = userState;

  return (
    <Fragment>
      <Stack
        sx={{
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        {login === null ? (
          <Typography variant="body1">{"The user has not a bio."}</Typography>
        ) : (
          <a target="_blank" href={`https://github.com/${login}`}>
            <Typography
              vatiant="caption"
              sx={{
                "@media only screen and (max-width: 900px) and (min-width: 320px)":
                  {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  },
              }}
            >
              GitHub: <br />@{login}
            </Typography>
          </a>
        )}

        {bio === null ? (
          <Typography variant="body1">{"The user has not a bio."}</Typography>
        ) : (
          <a href={`mailto:${bio}`}>
            <Typography
              variant="body1"
              sx={{
                "@media only screen and (max-width: 900px) and (min-width: 320px)":
                  {
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  },
              }}
            >
              Email: <br />
              {bio}
            </Typography>
          </a>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  );
};

export default Description;
