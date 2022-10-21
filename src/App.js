import React from 'react';
import './App.css';
import Contador from './PraticaGuiada/Contador';
import FormLocal from './PraticaGuiada/FormLocal';

function App() {
  console.log("Renderizou App")
  return (
    <div>
      <h1>Aula de Local Storage</h1>
      {/* <FormLocal/> */}
      <Contador/>
    </div>
  );
}

export default App;
