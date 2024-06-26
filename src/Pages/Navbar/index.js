import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './style.css'

const Navbar = () =>{
  return <div>
    <div className='logo text-center' id='logo'>
      <img src={logo} alt='sabah' width={190} height={70} />
    </div>
    <nav className="navbar navbar-expand-lg" id='navbar'>
        <div className='m-auto'>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" style={{width: 'fit-content'}} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink to='/' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page" >الرئيسية</NavLink>
              <NavLink to='/categories' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الافتتاحية</NavLink>
              <NavLink to='/products' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">العالمية</NavLink>
              <NavLink to='/about-us' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الاقتصاد</NavLink>
              <NavLink to='/contact' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الرياضة</NavLink>
              <NavLink to='/contac' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">تلفزيون الصباح</NavLink>
            </div>
          </div>
        </div>
    </nav>
  </div>
}
export default Navbar