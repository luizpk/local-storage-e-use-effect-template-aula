import React, {useState} from "react";
import {useEffect} from "react";

export default function Exercicio1(){
   //estado para guardar valor do input digitado pelo usuário
  const [inputValue, setInputValue] = useState("");

  //função que guarda valor digitado no input no estado
  const handleInput = (e) => setInputValue(e.target.value);

  //função chamada quando clicamos no botão Guardar dados
  const storeData = () => {
    //salvando os dados no input no localStorage com a chave texto
    localStorage.setItem("texto", inputValue);
    //imprimindo no console um aviso que o dado foi salvo com sucesso.
    //Basta consultar a aba application
    console.log("Dado salvo com sucesso!");
  };

  //função chamada quando clicamos no botão Pegar dados
  const getData = () => {
    //buscando o dado guardado no localStorage com o nome da chave
    const texto = localStorage.getItem("texto");
    //atualizando o valor do estado com o dado que pegamos no estado.
    //Quando clicamos em pegar dados, o valor do input atualiza para o que buscamos no localStorage
    setInputValue(texto);
    //imprimindo no console o dado que foi buscado no localStorage
    console.log("Dado:", texto);
  };


  useEffect (()=>{
        document.title = inputValue
    }, [inputValue])


  return (
    <div className="App">
      <p>
        Abra sua aba applications do navegador, digite algo no input e clique no
        botão de salvar e buscar dados. Observe o console!
      </p>
      <br />

      {/* input para o usuário digitar valor a ser guardado */}
      <label htmlFor="texto">Texto: </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="Digite aqui"
      />
      <br />
      {/* botão reponsável por guardar itens no localStorage */}
      <button onClick={storeData}>Salvar dados</button>

      {/* botão responsável por buscar itens no local storage */}
      <button onClick={getData}>Pegar dados</button>
    </div>
  ); 
}