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

    const onClickSave = ()=>{
        localStorage.setItem('nomeUsuario', nome)
        // setNome("")
    }

    const onClickLoad = ()=>{
        const dadoAcessado = localStorage.getItem('nomeUsuario')
        // setNome(dadoAcessado)
        alert(dadoAcessado)
    }
    
    //exercicio2
    const onchangeTarefa = (event)=>{
        setTarefa(event.target.value)
    }
    
    const onClickSaveTarefa = (e)=> {
        setListaTarefa([tarefa, ...listaTarefa])
        setTarefa("")
    }

    // const saveTaks = ()=>{
    //     const listaTarefaString = JSON.stringify(listaTarefa)
    //     localStorage.setItem("tarefa",listaTarefaString )
    // }

    // const loadTask = ()=>{
    //     setListaTarefa(JSON.parse(localStorage.getItem("tarefa")))
    // }
    

    //exercicio3

    // useEffect(()=>{
    //     onchangeNome()
    // }, [tarefa])

    // document.title = nome

    // useEffect(()=>{
    //     document.title = nome
    // },[tarefa])

    useEffect(()=>{
        if(nome.length){
        localStorage.setItem('nomeUsuario', nome)
        }
    },[nome])


    useEffect(()=>{
        console.log("[] - Roda a cada montagem do componente")
        if(listaTarefa.length){
            setListaTarefa(JSON.parse(localStorage.getItem("tarefa")))
        }else{
            // localStorage.setItem("tarefa","[]" )
            // setListaTarefa(JSON.parse(localStorage.getItem("tarefa")))
        }
       
    },[])

    useEffect(()=>{
        console.log("[nome] - Roda a cada alteração no estado do componente do parâmetro")
        if(listaTarefa.length){
            console.log(listaTarefa.length)
            const listaTarefaString = JSON.stringify(listaTarefa)
            localStorage.setItem("tarefa",listaTarefaString )
        }
    },[listaTarefa])


    // useEffect(()=>{
    //     console.log("vazio - Roda a cada alteração em qualquer estado do componente")
    // })

    return(
        <Form>
            <h3>Prática 1</h3>
            <label htmlFor="nome">nome: 
            <input name="nome" id="nome" onChange={onchangeNome} value={nome}/>
            </label>
            <div>
                <button onClick={onClickSave}>Guardar Dados</button>
                <button onClick={onClickLoad}>Acessar Dados</button>
            </div>
            <br/>
            <h3>Prática 2</h3>
            <label htmlFor="tarefa">tarefa:
            <input name="tarefa" id="tarefa" onChange={onchangeTarefa} value={tarefa}/>
            </label>
            <button type="button" onClick={onClickSaveTarefa}>adicionar Tarefa</button>
            <ul>
                {listaTarefa.map((task) =>{
                    return <li key={task}>{task}</li>
                }) 
                }
            </ul>
            <div>
                {/* <button onClick={saveTaks}>Guardar tarefa</button> */}
                {/* <button onClick={loadTask}>Acessar tarefa</button> */}
            </div>
        </Form>
    )
}