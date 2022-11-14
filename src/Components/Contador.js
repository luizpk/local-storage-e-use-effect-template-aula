import React, { useEffect, useState } from "react";
import { Container, Button } from "./style";

export default function Contador(){
    console.log("Renderizou Contador (inicio)")

    const [count, setCount] = useState(0)
    const [countB, setCountB] = useState(0)
    const [listCount, setListCount] = useState([]) //exercicio 2
    const [valorSalvo, setValorSalvo] = useState(0)

    const onClickCount= ()=>{
        setCount(count + 1)
    }
    const onClickCountB= ()=>{
        setCountB(countB + 1)
    }
    
    //1 - Criar funções para salvar e acessar valores guardados 
    const saveCount=()=>{
        setValorSalvo(count);
        localStorage.setItem("valor", valorSalvo)
    }

    const printCount=()=>{
        const valor= localStorage.getItem("valor")
        alert(`O valor guardado no local Storege é: ${valor}`)
    }

    //exercicio 2
    const saveCountB=()=>{
        localStorage.setItem("valorB", countB)
    }

    const printCountB=()=>{
        const valorB= localStorage.getItem("valorB")
        alert(`O valor guardado no local Storege é: ${valorB}`)
    }

    // useEffect(()=>{
    //     printListCount()
    // },[count])

    //exercicio 3
    //2 - Criar funções para guardar e acessa um lista de numeros
    // const saveListCount=()=>{
    //     setListCount([...listCount, count])
    //     const listCountString = JSON.stringify(listCount)
    //     localStorage.setItem("lista de valores",listCountString)
    // }

    // const printListCount=()=>{

    //     const listCountArray = JSON.parse(localStorage.getItem("lista de valores"))
    //     console.log(listCountArray)
    //     console.log(listCount)

    // }

    const printCounttitle=()=>{
        document.title=count
    }
    
    console.log("Renderizou Contador (fim)")
    


    return(
        <Container>
            <h3>Exercicio Fixacão</h3>
            <p>{count}</p>
            <div>
                <Button onClick={onClickCount}>incrementar</Button>
                <Button onClick={printCounttitle}>Imprimir no titulo</Button>
                <Button onClick={saveCount}>Salvar</Button>
                <Button onClick={printCount}>Imprimir</Button>
            </div>
            <p>Valor salvo {valorSalvo}</p>
            {/* <p>{countB}</p>
            <div>
                <Button onClick={onClickCountB}>incrementar B</Button>
                <Button onClick={saveCountB}>Salvar B</Button>
                <Button onClick={printCountB}>Imprimir B</Button>
            </div> */}
            {/* <div>
                <Button onClick={saveListCount}>Salvar lista</Button>
                <Button onClick={printListCount}>Imprimir lista</Button>
            </div> */}
            
        </Container>
    )
}