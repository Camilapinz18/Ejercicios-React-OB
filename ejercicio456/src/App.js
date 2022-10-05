import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import ClockHook from './components/ClockHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Clock></Clock>*/}
        <ClockHook></ClockHook>

      </header>
    </div>
  );
}

export default App;
