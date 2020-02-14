import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
const header = (props)=>{
return(
    <div className="Header">
        <h1 style = {{font: "oblique bold 120% cursive"}}>RICK AND MORTY</h1>
        <div style={{display: "flex"}}>
            <Filter clickFilter = {props.clickFilter} ></Filter>
            <SearchBar searchBarHandler = {props.searchBarHandler}></SearchBar>
        </div>
    </div>
);
}
export default header;

