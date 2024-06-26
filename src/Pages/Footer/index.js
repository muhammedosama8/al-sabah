import { NavLink } from 'react-router-dom';
import logo from '../../assets/white-logo.png'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import whats from '../../assets/whatsapp.svg'
import './style.css'

const Footer = () => {
    return <div className="footer">
        <img src={logo} alt='sabah' width={220} height={100} />
        <div className="links">
            <NavLink to='/' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page" >الرئيسية</NavLink>
            <NavLink to='/categories' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الافتتاحية</NavLink>
            <NavLink to='/products' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">العالمية</NavLink>
            <NavLink to='/about-us' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الاقتصاد</NavLink>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">الرياضة</NavLink>
            <NavLink to='/contac' className={({ isActive }) => isActive ? "active nav-link py-0" : "nav-link py-0"} aria-current="page">تلفزيون الصباح</NavLink>
        </div>
        <div className='social'>
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='instagram' />
            <img src={whats} alt='whats' />
        </div>
        <hr />
        <div>
            <p className='m-1'>جميع الحقوق &copy; الصباح
            <span className="mx-1">{new Date().getFullYear()}</span>
            </p>
            <p className="m-0 power">مدعوم من
                <a  rel="noreferrer" 
                    href='https://www.cloudliftsolution.com/' 
                    target='_blank'
                    style={{
                        color: '#fff',
                        textDecoration: 'none',
                        margin: '0 2px'
                    }}
                >Cloud Lift Solutions</a>
            </p>
        </div>
    </div>
}
export default Footer;