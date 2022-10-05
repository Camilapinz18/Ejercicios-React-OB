import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/TaskListComponent';
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
        <TaskListComponent></TaskListComponent>
   
      </header>
    </div>
  );
}

export default App;

{/*D:/React apss/hola-mundo/ npm start*/}
