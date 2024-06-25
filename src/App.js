/* import './App.css'; */
import { Routes, Route, Link } from 'react-router-dom';
import IconComponent from "./components/icon-component/IconComponent";
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';

function App() {
  return (
    <div className="App">
     <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
     </nav>

     <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/contact' element={ <Contact/> }/>
     </Routes>
    {/*  <IconComponent/> */}
    
    </div>
  );
}

export default App;
