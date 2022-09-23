import React from "react";
import { useEffect, useState } from "react";


function Contador(props){

    const [contador, setCount] = useState(0);
   
    function countClick(){
        setCount(contador+1);
    }
    
    return(
        <>

    <h1 >{contador}</h1>
    <button onClick={countClick}/>
    </>
        ) ;
}

export default Contador;