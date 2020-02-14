import React from "react";

const filter = (props)=>{
    return (
        <div style={{display:"flex", marginLeft:"300px"}}> 
            <div className = "Filter" onClick = {props.clickFilter.bind(this, 1)}>
                Alive
            </div>
            <div className = "Filter" onClick = {props.clickFilter.bind(this, 2)}>
                Dead
            </div>
            <div className = "Filter" onClick = {props.clickFilter.bind(this, 0)}>
                All
            </div>
        </div>
    );
}

export default filter;