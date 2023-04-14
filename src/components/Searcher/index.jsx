import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searcher = (props) => {
  const { setInputUser } = props;
  
  const [valueInput, setValueInput] = useState('');
  
  const onSearchValueChange = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue); 
  }
  
  const handleSubmit = () => {
    setInputUser(valueInput);    
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: "90%",
        }}
      />
      <IconButton
        onClick={handleSubmit}
        size="small"
        sx={{
          //left: "-45px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
