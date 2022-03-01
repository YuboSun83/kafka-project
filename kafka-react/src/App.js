import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigator from './components/Navigator';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navigator />
          <Welcome />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
