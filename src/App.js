import "./App.css";
import Table from "./components/Table";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <img src={logo} className="logo" />
        <h1>Crypto Data Table</h1>
      </div>
      <Table />
    </div>
  );
}

export default App;
