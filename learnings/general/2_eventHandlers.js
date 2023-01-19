// function Button(){

//     function clickkaro(){
//         console.log("button is clicked");
//     }
//     return(
//         <button onClick={clickkaro} style= {{padding:"1rem",cursor:"pointer"}}>click me</button>
//     )
// }
// export default Button

function Button(){

    function hoverkaro(){
        console.log("cursor is on the button");
       
    }
    return(
        <button onMouseOver={hoverkaro} style= {{padding:"1rem",cursor:"pointer"}}>click me</button>
    )
}
export default Button