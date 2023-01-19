// this is intro to react Hooks

import { useState } from "react";

 function InputComponent() { 
    const [inputdetails, setText]=useState('name here');

    function handleChange(details){
        setText(details.target.value);

    }
    

  return ( 
    <>
        <input value={inputdetails} onChange={handleChange}/>
        {/* here value attribute of input field is dynamic and handled by onChange event listener  */}

        <p>your input: {inputdetails}</p>
        <button onClick={()=>{setText('enter name again')}}>
            reset
        </button>
    </>
     
  ); 
} 

export default InputComponent;