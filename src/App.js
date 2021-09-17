import './App.css';
import Navbar from './components/NavBar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Navbar/>
    </Router>
  );
}

export default App;
