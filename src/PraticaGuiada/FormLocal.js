import React, { useEffect, useState } from "react";
import {Form} from './style'

export default function FormLocal(){
    console.log("Renderizou form")
    //exercicio1
    const[nome,setNome] = useState("")
    const[tarefa,setTarefa] = useState("")
    const[listaTarefa,setListaTarefa] = useState([])

    const onchangeNome = (event)=>{
        setNome(event.target.value)
        console.log("alterar input nome")
    }
    // useEffect(()=>{
    //     onchangeNome()
    // }, [tarefa])

    const onClickSet = ()=>{
        localStorage.setItem('nomeUsuario', nome)
    }

    const onClickGet = ()=>{
        const dadoAcessado = localStorage.getItem('nomeUsuario')
        console.log("dado acessado:", dadoAcessado)
        alert(`dado acessado: ${dadoAcessado}`)
    }
    

    //exercicio2
    const onchangeTarefa = (event)=>{
        setTarefa(event.target.value)
    }
    
    const onClickSetTarefa = ()=> {
        setListaTarefa([...listaTarefa, tarefa])
        console.log(listaTarefa)
        const listaTarefaString = JSON.stringify(listaTarefa)
        console.log(listaTarefaString)
        localStorage.setItem("tarefa",listaTarefaString )
    }

    const listaTarefaRenderizada = listaTarefa.map((tesk) =>{
        return <li>{tesk}</li>
    })
    

    //exercicio3
    // document.title = nome

    useEffect(()=>{
        document.title = nome
    },[tarefa])


    useEffect(()=>{
        console.log("[] - Roda a cada montagem do componente")
    },[])

    useEffect(()=>{
        console.log("[nome] - Roda a cada alteração no estado do componente do parâmetro")
    },[nome])

    useEffect(()=>{
        console.log("vazio - Roda a cada alteração em qualquer estado do componente")
    })

    return(
        <Form>
            <h2>Formulário pra salvar local</h2>
            <h3>Prática 1</h3>
            <label htmlFor="nome">nome:</label>
            <input name="nome" id="nome" onChange={onchangeNome} value={nome}/>
            <button type="button" onClick={onClickSet}>Guardar Dados</button>
            <button type="button" onClick={onClickGet}>Acessar Dados</button>

            <h3>Prática 2</h3>
            <label htmlFor="tarefa">tarefa:</label>
            <input name="tarefa" id="tarefa" onChange={onchangeTarefa} value={tarefa}/>
            <button type="button" onClick={onClickSetTarefa}>Guardar Tarefa</button>
            <ul>{listaTarefaRenderizada}</ul>

        </Form>
    )
}