import React from 'react';
import './App.css';
import Exercicio1 from './Components/exercicio1';
import Exercicio2 from './Components/exercicio2';
import Exercicio3 from './Components/exercicio3';
import FormLocal from './PraticaGuiada/FormLocal';

function App() {
  return (
    <div>
      <h1>Aula de Local Storage</h1>
      <hr/>
      <Exercicio1/>
      <hr/>
      {/* <Exercicio2/>
      <hr/>
      <Exercicio3/> */}
      <FormLocal/>
    </div>
  );
}

export default App;
