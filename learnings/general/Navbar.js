import React from "react";
import "../App.css";

function Navbar(){

    const navbarstyle={
        border: "2px solid red",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "13px",
        fontSize: "2rem",
        cursor: "pointer",
        listStyle: "none"
      }

    return(
    <aside className={navbarstyle}>
        <li style= {{color:"blue"}} >home </li>
        <li>{"hello"} </li>
        <li>about</li>                    {/* here we can write any JS code inside the { } and also can use plain HTML as well */}
        <li>{2} </li>                                  {/* and this is JSX for you */}              
        <li>contact</li>
        <li>{1<2}</li>
    </aside>
    );

}
 export default Navbar;