import logoSvg from '../src/img/logo.svg';
import './App.css';
import Start from './pages/Start';
import Services from "./pages/Services";
import About from './pages/About';
import Action from './pages/Action';

import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-cont'>
          <Routes>
            <Route path='/start' element={<Start />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/action' element={<Action />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};


  export default App;
