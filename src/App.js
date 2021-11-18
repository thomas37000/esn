import logo from "./logo.svg";
import Routter from "./router/Routter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Routter />
    </div>
  );
}

export default App;
