import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";

const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <Fragment>
        <Stack
        direction="row"
        sx={{
          justifyContent: 'space-between'
        }}>
            <Typography
            variant="h4">{name}</Typography>
            <Typography
            variant="subtitle2">{created_at && created_at.slice(0,10)}</Typography>
        </Stack>
            <Typography
            vatiant="caption">@{login}</Typography>
    </Fragment>
  )
};

export default PrincipalInformation;
