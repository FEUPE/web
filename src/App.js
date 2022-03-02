import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FEUPE</h1>
        <a
          className="App-link"
          href="https://feupe.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Federación de Estudiantes Universitarios Particulares del Ecuador
        </a>
      </header>
    </div>
  );
}

export default App;
