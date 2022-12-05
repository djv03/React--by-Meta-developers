import React from "react";

function Header(props){
    console.log(props)//this line is very interesting 
    //it is giving us all the properties which we has passed in the out App.js
    //so props is nothing but the arguments passed from App to its child components(here Header.js)
    return <h1> {props.title} there</h1>;
}
export default Header