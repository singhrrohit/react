import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='menu' element={<Menu/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    </Routes>
    
   
    </BrowserRouter>
    </div>
  );
}

export default App;
