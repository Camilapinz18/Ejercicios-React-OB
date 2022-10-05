import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/TaskListComponent';
import React from 'react';
import GreetingStyled from './components/pure/forms/greetingStyled'
 {/*Importa el componente Greeting*/}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       {/*Componente propio tipo Class*/}
        {/*<Greeting name="Camila"></Greeting>*/}
        {/*<GreetingF name="Pedro"></GreetingF>*/}

        {/*COmponente de listado de tareas*/}

      <GreetingStyled name='Camila'></GreetingStyled>
   
      </header>
    </div>
  );
}

export default App;

{/*D:/React apss/hola-mundo/ npm start*/}
