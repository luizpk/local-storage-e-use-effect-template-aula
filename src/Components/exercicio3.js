import React from "react";
import {useState} from "react";
import { useEffect } from "react";


export default function ComCompFuncional() {

    // declaro meus estados
    const [contador, setContador] = useState(0)
    // crio a função para incrementar 
    const incrementandoContador = () =>{
        setContador(contador +1)
    }

    useEffect (()=>{
        document.title = contador
    }, [contador])

    return (
        <div>
            <p>
                <strong>{contador}</strong>
            </p>
            <button onClick={incrementandoContador}>+</button>
        </div>)
        } 
        
    