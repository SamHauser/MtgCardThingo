import logo from './logo.svg';
import './App.css';
var scryfall = require("scryfall-client")

const INEEDVIGILENCE = function() { 
  scryfall
  .getCardBySetCodeAndCollectorNumber("otj", "10"
  )
  .then(function (list ) {
    console.log(list)
    return list
  });
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {INEEDVIGILENCE()}
        </p>
      </header>
    </div>
  );
}

export default App;
