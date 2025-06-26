
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css'
import Header from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer  from './layouts/Footer'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {


  return (
    <>
     <ScrollToTop />
      <Header />  
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  ) 
}

export default App

