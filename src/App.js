import React, { useState } from 'react';
import './App.css';
import Contador from './Components/Contador';
import FormLocal from './Components/FormLocal';
import {GlobalStyles} from './GlobalStyles/GlobalStyles'

function App() {
  console.log("Renderizou App")
  // const [visible, setVisible] = useState(true)

  // setTimeout(()=>{
  //   setVisible(false)
  // }, 5000);

  // localStorage.setItem("tarefa","[]" )


  return (
    <div>
      <GlobalStyles/>
      <h1>Aula de Local Storage</h1>
      <FormLocal/>
      <Contador/>
    </div>
  );
}

export default App;
