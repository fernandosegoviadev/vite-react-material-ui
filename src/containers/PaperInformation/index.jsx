import React from "react";
import { Stack, Paper, Typography } from "@mui/material";
import { Fragment } from "react";

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <Fragment>
      <Paper elevation={3}>
        <Stack>
          <Typography>Repos</Typography>
          <Typography>{public_repos}</Typography>
        </Stack>
        <Stack>
        <Typography>Followers</Typography>
          <Typography>{followers}</Typography>
        </Stack>
        <Stack>
        <Typography>Following</Typography>
          <Typography>{following}</Typography>
        </Stack>
      </Paper>
    </Fragment>
  );
};

export default PaperInformation;
