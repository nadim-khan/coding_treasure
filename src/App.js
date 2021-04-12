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
import React,{useState,useEffect} from 'react';

const pageArea= {
  background:'red'
}
function App() {
  const [scrollValue,setScrollValue] = useState(null)
  const [isBottom,setBottom] = useState(false)
  useEffect(() => {
    const scrolling_function = () => {
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      console.log(windowBottom,docHeight)
      if (window.innerHeight + window.pageYOffset>= docHeight-10) {
            setBottom(true)
            setScrollValue(window.pageYOffset)
            window.removeEventListener('scroll',scrolling_function)
      } else {
        setBottom(false)
            setScrollValue(window.pageYOffset)
            window.removeEventListener('scroll',scrolling_function)
      }
    }
    window.addEventListener('scroll', scrolling_function);
}, [ scrollValue])

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
      <Footer isBottom={isBottom}/>
  </Router>
  );
}

export default App;
