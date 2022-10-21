import React from 'react';
import './App.css';
import Contador from './PraticaGuiada/Contador';
import FormLocal from './PraticaGuiada/FormLocal';
import {GlobalStyles} from './GlobalStyles/GlobalStyles'

function App() {
  console.log("Renderizou App")
  return (
    <div>
      <GlobalStyles/>
      <h1>Aula de Local Storage</h1>
      {/* <FormLocal/> */}
      <Contador/>
    </div>
  );
}

export default App;
