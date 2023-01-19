import React from "react";
import { useState } from "react";

function Example(props){
    const[word, setword]= useState('eat');
    // const[aceess the date state, update state]= React.useState(new Date());

    function clickhandle(){
        setword('drink');
    }
    return(
        <>
            <div>
                <h1>{props.action} at restraunt</h1>
                <button onClick={clickhandle}>click me</button>
            </div>
        </>
    )

}
export default Example;
