import "./App.css";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { useState, useEffect } from "react";
import { getGitHubUser } from "./services/users";

function App() {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");

  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    console.log(userResponse);
  }
  useEffect(()=>{
    gettingUser(inputUser);
  },[])
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
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  );
}

export default App;
