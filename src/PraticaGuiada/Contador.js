import React, { useEffect, useState } from "react";
import { Container } from "./style";

export default function Contador(){
    console.log("Renderizou Contador")
    const [count, setCount] = useState(0)


    return(
        <Container>
            <h3>Exercício Ficação</h3>
            <p>{count}</p>
            <button onClick={()=>{setCount(count + 1)}}>incrementar</button>
        </Container>
    )
}