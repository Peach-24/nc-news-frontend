import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Latest from './Components/Latest';
import Popular from './Components/Popular';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home path='/' />
        <Latest path='/latest' />
        <Popular path='/popular' />
      </Router>
    </div>
  );
}

export default App;
