import React from "react";
import { useEffect, useState } from "react";


function TituloPrincipal(props){

    const [titulo, setTitulo] = useState(props.titulo ?? "Olá Mundo REACT!!!");

    useEffect(()=>{
        console.log("Titulo mudou");
    }, [titulo, setTitulo]);

    // let titulo = "Olá Mundo! REACT!!!";
    // if(props.titulo){
    //     titulo = props.titulo;
    // }

    function clickCallBack(event){
        
        alert("Obrigado por clicar!")
    }

    function handleChangeTittle(event){
        setTitulo(event.target.value);
    }
    
    return(
        <>
    <h1 onClick={clickCallBack}>{titulo}</h1>;
    <input type="text" onChange={handleChangeTittle}/>
    </>
        ) ;
}

export default TituloPrincipal;