import React from "react";
import { Stack, Paper, Typography } from "@mui/material";
import { Fragment } from "react";

const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <Fragment>
      <Paper elevation={3}>
        <Stack
        spacing={3}
        direction="row"
        sx={{
          justifyContent: 'space-evenly',
          margin: '20px'
        }}
        >
          <Stack>
            <Typography
            variant="h5">Repos</Typography>
            <Typography
            variant="h6">{public_repos}</Typography>
          </Stack>
          <Stack>
            <Typography
            variant="h5">Followers</Typography>
            <Typography
            variant="h6">{followers}</Typography>
          </Stack>
          <Stack>
            <Typography
            variant="h5">Following</Typography>
            <Typography
            variant="h6">{following}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Fragment>
  );
};

export default PaperInformation;
