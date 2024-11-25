import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;