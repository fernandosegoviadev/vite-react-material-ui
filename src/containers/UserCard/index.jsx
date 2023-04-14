import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../PrincipalInformation";
import Description from "../Description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        maxHeight: "60%",        
      }}
    >
      <Grid item xs={3}>
        <CardMedia
          component="img"
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius: "50%",
            width: "100%",
            height: "100%"
          }}
        />
      </Grid>
      <Grid item xs={0}>
        <Stack direction="column" spacing={1} sx={{ maging: "30px" }}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Stack>
  );
};

export default UserCard;
