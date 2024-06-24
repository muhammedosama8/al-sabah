import { NavLink } from 'react-router-dom'
import sabah from '../../assets/sabah.jpeg'
import './style.css'
import { useEffect } from 'react'

const Navbar = () =>{
  return <div>
    <div className='logo text-center' id='logo'>
      <img src={sabah} alt='sabah' width={190} height={70} />
    </div>
    <nav className="navbar navbar-expand-lg" id='navbar'>
        <div className='m-auto'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{width: 'fit-content'}} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to='/' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page" >المحلية</NavLink>
              <NavLink to='/categories' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الغربية</NavLink>
              <NavLink to='/products' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">العالمية</NavLink>
              <NavLink to='/about-us' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الاقتصاد</NavLink>
              <NavLink to='/contact' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الرياضة</NavLink>
              <NavLink to='/contac' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">برامجنا</NavLink>
            </div>
          </div>
        </div>
    </nav>
  </div>
}
export default Navbar