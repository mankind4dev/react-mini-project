import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import AddPost from './components/AddPost';
import Tutorials from './components/Tutorials';
import WebSites from './components/WebSites';
import Others from './components/Others';
import About from './components/About';
import Missing from './components/Missing';

import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  

  return (
    <div className='App'>
      <Header />
      <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/AddPost' element={<AddPost />} />
          <Route exact path='/Tutorials' element={<Tutorials />} />
          <Route exact path='/WebSites' element={<WebSites />} />
          <Route exact path='/Others' element={<Others />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='*' element={<Missing />} />
        </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
