import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Navbar/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import Footer from './components/Navbar/Footer';
import React from 'react';

const pageArea= {
  background:'red'
}
function App() {
  return (
    <Router>
      <Header />
      <div className="pageArea">
        <Switch >
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
      <Footer/>
  </Router>
  );
}

export default App;
