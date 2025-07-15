import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
