import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';



const App = () => 
<div>
  <HashRouter>
  <Nav/>
    <div>
    <Switch>
      <Route exact path={'/'} Component={About} />
      <Route exact path={'/portfolio'} Component={Portfolio}/>
      <Route exact path={'/resume'} Component={Resume}/>
      <Route exact path={'/contact'} Component={Contact}/>
     </Switch>
     </div>
     <Footer/>
     </HashRouter>
     
</div>

export default App;
