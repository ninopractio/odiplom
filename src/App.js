import logoSvg from '../src/img/logo.svg';
import './App.css';
import Start from './pages/Start';
import Services from "./pages/Services";
import About from './pages/About';
import Action from './pages/Action';
import Doctors from './pages/Doctors';
import Vacanc from './pages/Vacanc';
import Nav from './components/Nav';
import Kontakt from './pages/Kontakt';
import Vopros from './pages/Vopros';
import Profile from './pages/Profile';


import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-cont'>
          <Routes>
            **<Route path='/' element={<Start />} />**
            <Route path='/start' element={<Start />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/action' element={<Action />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/vacanc' element={<Vacanc />} />
            <Route path='/kontakt' element={<Kontakt />} />
            <Route path='/vopros' element={<Vopros />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};


  export default App;