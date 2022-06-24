
import React, {  useState } from "react";

import SearchBar from "material-ui-search-bar";
import { Button, Typography } from "@mui/material";
import {  useDispatch } from "react-redux";
import { searchTask,getTasks } from "../redux/actions/tasks";

import {Dropdown,ButtonGroup} from 'react-bootstrap';
function Searchbar() {
    const dispatch = useDispatch();
    const [searched, setSearched] = useState("");

    const handleDrop = (e) => {
    
        setSearchMethod(e)
      
        };


        
    const [searchMethod, setSearchMethod] = useState("title");

    const requestSearch = (searchedVal) => {
    
        if(searchedVal)
        dispatch(searchTask({"searchMethod":searchMethod,"searchValue":searchedVal}));
        else
        cancelSearch()
      };
      
  const cancelSearch = () => { 
    setSearched("");
    dispatch(getTasks({}));

  };

    
  return (
    <div style={{margin:"20px"}}>
    <Dropdown as={ButtonGroup}>
    <Typography style={{margin:"5"}} >{searchMethod}</Typography>

    <Dropdown.Toggle split variant="outline-dark" id="dropdown-split-basic" />

    <Dropdown.Menu id="menulist">
        {['title','description'].map(eachBreakpoint => {
            return (
              <Dropdown.Item
                onClick={() =>handleDrop(eachBreakpoint)}
                key={eachBreakpoint}
              >
                {eachBreakpoint}
              </Dropdown.Item>
            );
        })}
    </Dropdown.Menu>
  </Dropdown>
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
    </div>
  )
}

export default Searchbar