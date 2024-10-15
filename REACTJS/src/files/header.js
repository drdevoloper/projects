import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate('/loginpage'); // Use navigate function to redirect to login page
  };

  return (
    <div className='full'>
      <div className='nav'>
        <div className='navbar'>
          <div className='dis'>
            <img src='navlogo2.jpg' alt='' className='img' />
            <h1>PLAY MART</h1>
          </div>
          <ul className='ulist'>
            <li className='list'><Link to="/home">HOME</Link></li>
            <li className='list'><Link to="/indoor">INDOOR GAMES</Link></li>
            <li className='list'><Link to="/outdoor">OUTDOOR GAMES</Link></li>
            <li className='list'><Link to="/about">ABOUT US</Link></li>
            <li className='list'>
              <Link to="/cart">CART <FaCartPlus /></Link>
            </li>
            <div className="search-bar">
              <input type="search" className="sear" placeholder="Search" />
              <FaSearch className="search-icon" />
            </div>
            <button className='button' onClick={handleLoginClick}>LOGIN/REGISTER</button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
