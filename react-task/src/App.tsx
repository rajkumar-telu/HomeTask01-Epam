import React from 'react'
import './App.css';
import Header from './components/Header';
import Routes from './routes/routes';
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes/>
    </Router>
  )
}

export default App;