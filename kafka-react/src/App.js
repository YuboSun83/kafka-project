import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import About from './components/About';
import Producer from './components/Producer';
import Broker from './components/Broker';
import Zookeeper from './components/Zookeeper';
import Consumer from './components/Consumer';
import DesasterRecovery from './components/DesasterRecovery';

function App() {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/producer" element={<Producer />} />
        <Route path="/broker" element={<Broker />} />
        <Route path="/zookeeper" element={<Zookeeper />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/desasterRecovery" element={<DesasterRecovery />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
