import "./App.css";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import UserCard from "./containers/UserCard";

import { useState, useEffect } from "react";
import { getGitHubUser } from "./services/users";

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    
    if(userState === 'octocat') {
      localStorage.setItem('octocat',userResponse);
    }

    if(userResponse.message === 'Not Found') {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  }
  console.log(userState);

  useEffect(()=>{
    gettingUser(inputUser);
  },[inputUser])

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        height: "500px",
        borderRadius: "15px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0px", 
        margin: "0px",
        border: "0px",
        '@media only screen and (max-width: 900px) and (min-width: 320px)': {
          width: '90vw',
          minHeight: '90vh',
          justifyContent: 'flex-start',
          padding: '8% 5%',  
        },
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
