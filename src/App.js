import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Blog from './containers/Blog';
import About from './containers/About';

import Header from './components/Header';

function App() {
  return (
        
    <Router>
      <div className="app">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </div>
    </Router>

  );
}

export default App;