import React from "react";

function HOC(props) {
    return (
        <div style={{alignItems: "center",display: "flex",flexDirection: "column"}}>
            <h1>HOC Component</h1>
            <div style={{backgroundColor:"lightblue", width: "200px",}}>
            <props.data />
            </div>
             <div style={{backgroundColor:"green", width: "200px"}}>
            <props.data />
        </div>
        </div>
    );
}
export default HOC;