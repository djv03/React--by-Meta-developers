function Modetoggler(){

    let darkmodeOn=false;
   
    let onClick=()=>{
        darkmodeOn=!darkmodeOn;
        if (darkmodeOn===true) {
            console.log("light mode is enabled");
            document.getElementById('heading').innerHTML="<h1>light mode is one</h1>" ;
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
            
            
        } else {
            console.log("dark mode is enabled");
            document.getElementById('heading').innerHTML= "<h1>dark mode is one</h1> ";
            document.body.style.backgroundColor="black";
            document.body.style.color="white";
        }
    }
    
    return(
        <div className="container">

        <div id="heading" >

        </div>
            <button onClick={onClick}>click me</button>
        </div>
    )

}

export default Modetoggler