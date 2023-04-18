import { IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Searcher = (props) => {
  const { setInputUser } = props;

  const [valueInput, setValueInput] = useState("");

  const onSearchValueChange = (e) => {
    const inputValue = e.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction="row"
      sx={{
        marginBottom: "20px",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
        onSubmit={handleSubmit}
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
            width: "100%",
          }}
        ></TextField>
        <IconButton
          onClick={handleSubmit}
          size="small"
          sx={
            {
              left: "-25px",
              width: "0px",
              padding: "0px"
            }
          }
        >
          <SearchIcon />
        </IconButton>
      </form>
    </Stack>
  );
};

export default Searcher;
