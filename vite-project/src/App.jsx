import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';
import { HashRouter, Route } from 'react-router-dom';

const App = () => 
<div>
  <HashRouter>
  <Nav></Nav>
    <div>
    <switch>
    <Route exact path={'/'} Component={About} />
      <Route exact path={'/contact'} Component={Contact}/>
      
    </switch>
    </div>
  </HashRouter>
</div>

export default App
