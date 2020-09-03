import React from 'react';
import './App.css';

// import {Routes, Route} from 'react-router';

//import components
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Cources from './Courses';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="cources" element={<Cources />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
