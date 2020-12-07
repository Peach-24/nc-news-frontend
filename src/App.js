import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Latest from './Components/Latest';
import Popular from './Components/Popular';
import Article from './Components/Article';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home path='/' />
        <Latest path='/latest' />
        <Popular path='/popular' />
        <Article path='/articles/:article_id' />
      </Router>
    </div>
  );
}

export default App;
