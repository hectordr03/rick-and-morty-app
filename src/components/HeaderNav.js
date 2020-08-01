import React from 'react';

// Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Logo
import logo from '../assets/images/logo.png';

const HeaderNav = () => {
    return (
        <div>
            <Navbar bg='dark' className='header'>
                <Nav.Link>Characters</Nav.Link>
                <img src={logo} alt='' id='nav-logo' />
                <Nav.Link>Worlds</Nav.Link>
            </Navbar>
        </div>
    )
}

export default HeaderNav;