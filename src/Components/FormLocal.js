import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);

  const onChangeName = (e) => {
    setNome(e.target.value)
  }

  const onChangeTarefa = (e) => {
    setTarefa(e.target.value)
  }

  const onChangeListaTarefa = (e) => {
    setListaTarefa(e.target.value)
  }

  const saveData = () => {
    localStorage.setItem('user',nome);
  };


  const loadData = () => {
    const nomeLoad = localStorage.getItem('user')
    setNome(nomeLoad)
  }

  const atualizarLista = () =>{
    setListaTarefa([tarefa, ...listaTarefa])
  }

  const saveTarefa = () => {
    const stringficado = JSON.stringify(listaTarefa)
    localStorage.setItem('listaTarefas', stringficado)
  }

  const loadTarefa = () => {
    const parseado = JSON.parse(localStorage.getItem('listaTarefas'))
    setListaTarefa(parseado)
  }

  useEffect(()=>{
   localStorage.setItem('user',nome);
  },[nome]);

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input value={nome} onChange={onChangeName} name="nome" id="nome" />
      </label>
      <div>
        <button onClick={saveData}>Guardar Dados</button>
        <button onClick={loadData}>Acessar Dados</button>
      </div>
      <br />
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input value={tarefa} onChange={onChangeTarefa} name="tarefa" id="tarefa" />
      </label>
      <button type="button" onClick={atualizarLista}>adicionar Tarefa</button>
      <ul>
        {listaTarefa.map((task) => {
          return <li key={task}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={saveTarefa}>Guardar tarefa</button>
        <button onClick={loadTarefa}>Acessar tarefa</button>
      </div>
    </Form>
  );
}
