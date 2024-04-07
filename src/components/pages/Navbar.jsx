// eslint-disable-next-line no-unused-vars
import React from 'react';
import './../../css/style.css'
import { Link } from 'react-router-dom';


// const Navbar = () => (
// <header className='navbar'>
// <div className='title item'><Link to="/">Ishaara AI</Link></div>
//         <div className='item'><Link to="/pricing">Price</Link></div>
//     </header>
// );
// export default Navbar;

// import React from 'react';
// import './Navbar.css'; // Assuming you have a separate CSS file for Navbar styles

// import React from 'react';
import { useState } from 'react';
import './nav.css';
import Bars from './../../assets/bars.svg'
import Xmark from './../../assets/xmark.svg'
import Home from './../../assets/house.svg'
import Hands from './../../assets/hands.svg'
import Price from './../../assets/money.svg'
import About from './../../assets/team.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <input type="checkbox" id="check" checked={isOpen} onChange={toggleSidebar} />
      <label htmlFor="check">
      <img src={Bars} id="btn" alt="bars" />
      <img src={Xmark} id="cancel" alt="x" />
      </label>
      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        <header>Menu</header>
        <Link to="/" className="active">
        <img src={Home} className="img" alt="house" />
          <span>Home</span>
        </Link>
        <Link to="/Translate" className="link">
        <img src={Hands} className="img" alt="translate" />
          <span>Translate</span>
        </Link>
        <Link to="/Pricing" className="link">
        <img src={Price} className="img" alt="money" />
          <span>Pricing</span>
        </Link>
        <Link to="/About" className="link">
        <img src={About} className="img" alt="team" />
          <span>About</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
