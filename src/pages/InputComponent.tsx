import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInputDinamicComponent } from "../store/desiredComponent";

import TextField from "@mui/material/TextField";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CancelText from "@mui/icons-material/HighlightOffSharp";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = React.useState("");

  function deleteAllText() {
    setSearchText("");
    dispatch(changeInputDinamicComponent({ newInput: null }));
  }

  const DinamicComponent = "div";
  const CustomTag = "div";

  function handleEnterKeyDown(event: any) {
    if (event.key === "Enter" && searchText !== "") {
      dispatch(changeInputDinamicComponent({ newInput: searchText }));
    }
  }

  return (
    <div className="search-container px-4 mb-4 flex items-center gap-1">
      <SearchSharpIcon />
      <TextField
        fullWidth
        id="fullWidth"
        variant="standard"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        onKeyDown={handleEnterKeyDown}
      />
      <CancelText
        onClick={deleteAllText}
        className={
          searchText.length <= 0 ? "invisible" : "visible cursor-pointer"
        }
        sx={{ height: 20, width: 20 }}
      />
    </div>
  );
};

export default SearchBar;
