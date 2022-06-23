import FrontHeader from './Components/FrontHeader.js'
import Login from './Components/Login.js'
import Register from './Components/Register.js'
import './App.css';

function App() {
  return (
    <div className="App">
     <FrontHeader/>
     <Login/>
     <Register/>
    </div>
  );
}

export default App;
