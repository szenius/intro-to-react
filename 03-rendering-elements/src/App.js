import logo from './logo.svg';
import './App.css';


const name = 'Debby'
const hello = <h1>Hello, my name is {name}!</h1>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {hello}
      </header>
    </div>
  );
}

export default App;
