import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './Components/NavBar';
import DynamicBody from './Components/DynamicBody';
// import { Router } from 'react-router';

// set state (will do within components)
// create nav bar ~ component
// create body ~ component


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <DynamicBody />
      </Router>
    </div>
  );
}

export default App;
