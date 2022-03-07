import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Animitions from './components/Animitions';
import About from './components/About';

function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/animations" element={<Animitions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
