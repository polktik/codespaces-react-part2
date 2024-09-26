export default function MouseEvent() {
    return ( 

       <h1 onClick={e=>console.log("onClick")} 
       onMouseEnter={e=>console.log("onMouseEnter")}>
        Click Me</h1>
    );
}

