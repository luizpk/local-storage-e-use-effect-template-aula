import React, { useState } from "react";
import {Form} from './style'

export default function FormLocal(){

    const[name,setName] = useState()

    const onchangeName = (event)=>{
        setName(event.target.value)
        
    }

    const onClickSet = ()=>{
        localStorage.setItem('nomeUsuario', name)
    }

    const onClickGet = ()=>{
        const dadoAcessado = localStorage.getItem('nomeUsuario')
        console.log("dado acessado:", dadoAcessado)
    }

    console.log("valor atual do input:", name)
    return(
        <Form>
            <h2>Formulário pra salvar local</h2>
            <label htmlFor="nome">nome</label>
            <input name="nome" id="nome" onChange={onchangeName} value={name}/>
            <button type="button" onClick={onClickSet}>Guardar Dados</button>
            <button type="button" onClick={onClickGet}>Acessar Dados</button>
        </Form>
    )
}