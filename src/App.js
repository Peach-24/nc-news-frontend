import './App.css';
import { Router } from '@reach/router';
import Home from './Components/Home';
import Latest from './Components/Latest';
import Popular from './Components/Popular';
import Article from './Components/Article';
import ErrorMessage from './Components/ErrorMessage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home path='/' />
        <Latest path='/latest/:topic' />
        <Popular path='/popular/:topic' />
        <Article path='/articles/:article_id' />
        <ErrorMessage default errorMessage='Page not found... ☠️' />
      </Router>
    </div>
  );
}

export default App;
