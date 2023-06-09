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
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
            <Typography
            variant="h4"
            sx={{              
              '@media only screen and (max-width: 900px) and (min-width: 320px)': {
                whiteSpace:'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                fontSize: "20px",
                fontWeight: "600"
              },
            }}
            >{name}</Typography>
            <Typography
            variant="h6">{created_at && created_at.slice(0,10)}</Typography>
        </Stack>
    </Fragment>
  )
};

export default PrincipalInformation;
