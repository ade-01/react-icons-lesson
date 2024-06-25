import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import IconComponent from "./components/icon-component/IconComponent";
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Home from './components/pages/home/Home';


function App() {
  return (
    <div className="App">
     <nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'> 
        <img src="/logo.jpg" alt=""  width={100} height={100} className='rounded-circle'/>
        </Link>
      </div>
      <div className='collapse navbar-collapse ' id='navBarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>About</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
     </nav>

    <div className='container mt-3'>
      <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/contact' element={ <Contact/> }/>
      </Routes>
    </div>
    
    {/*  <IconComponent/> */}
    
    </div>
  );
}

export default App;
