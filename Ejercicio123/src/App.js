import logo from './logo.svg';
import './App.css';
import { Contact } from './Models/Contact.class';
import StatusComponent from './Components/Pure/StatusComponent';
import ContactListComponent from './Components/Container/ContactListComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ejercicio sesiones 1,2,3</h1>
        <ContactListComponent></ContactListComponent>
      </header>
    </div>

  );
}

export default App;
