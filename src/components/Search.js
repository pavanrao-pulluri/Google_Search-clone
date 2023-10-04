import React from "react";
import "../components/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();

    navigate("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };
  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="Submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            style={{ display: "none" }}
            type="Submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button style={{ display: "none" }} variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
};

export default Search;
