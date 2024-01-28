import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/signup')

    }
    return (
        <>
            <div>
                <img className='logo' alt='logo' src='https://t3.ftcdn.net/jpg/02/76/48/68/360_F_276486859_ZgcmRRJXCgrFFZusaA7d87sNjNJiIJTh.jpg'/>
                {auth ?
                    <ul className='nav-ul'>
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/add-product">Add Product</Link></li>
                        <li><Link to="/update">Update Product</Link></li>

                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={handleLogout} to="/signup">Logout</Link></li>
                    </ul>
                    :
                    <ul className='nav-ul nav-right'>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                }
            </div>

        </>
    );
}

export default Header;