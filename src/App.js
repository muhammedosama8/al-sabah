import './App.css';
import Navbar from './Pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import ScrollToTop from './common/ScrollToTop';
import Error404 from './common/Error404';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Pages/Footer';

function App() {
  useEffect(()=>{
    window.addEventListener('scroll', function() {
      var header = document.getElementById('logo');
      var navbar = document.getElementById('navbar');
      var sticky = header.offsetHeight;
    
      if (window.pageYOffset > sticky) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    });
  })
  return (
    <div className={`App`}>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
