import logoSvg from '../src/img/logo.svg';
import './App.css';
import Start from './pages/Start';

import About from './pages/About';

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

  // function App() {
  //   return (
  //     <div className= {App}> 
  //         <Nav />
  //         <BrowserRouter>

  //           <Routes>
  //             <Route path  = "/start" component = {Start} />
  //             <Route path = "/home" component = {Home} />
  //             <Route path = "/about" component = {About} />
  //           </Routes>

  //         </BrowserRouter>
  //     </div>
  // );

  // }

  export default App;
