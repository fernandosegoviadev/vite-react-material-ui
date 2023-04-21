import { CardMedia, Grid, Stack } from "@mui/material";
import React from "react";
import PrincipalInformation from "../PrincipalInformation";
import Description from "../Description";

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Stack
      sx={{
        marginTop: "30px",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        maxHeight: "60%", 
        flexDirection: 'row',   
        '@media only screen and (max-width: 900px) and (min-width: 320px)': {
          flexDirection: 'column',
          paddingTop: '15%'  
        },    
      }}
    >
      <Grid item 
      sx={{
        display: "flex",
        alignItems:"center",
        justifyContent: 'center'
      }}
      xs={3}>
        <CardMedia
          component="img"
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius: "50%",
            width: "90%",
            height: "80%",
            maxWidth: "90%",
            maxHeight: "80%"
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
