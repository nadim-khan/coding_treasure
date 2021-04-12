import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Navbar/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
  </Router>
  );
}

export default App;
