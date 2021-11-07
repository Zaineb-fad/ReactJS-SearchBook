import logo from './logo.svg';
import './App.css';
import {Search} from './components/Search'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App(){
  return (
    <div className="App">
  <Router>
    <header>
      <div>Books with Hooks</div>
      <ul className="menu"><li><Link to="/search">Search </Link></li></ul>
    </header>
    
  </Router>
 
 <Search/>

</div>
 )
}

export default App;
