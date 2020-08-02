import React from 'react';

// Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Logo
import logo from '../assets/images/logo.png';

const HeaderNav = () => {
    return (
        <div>
            {/* I used a Bootstrap navbar because there were originally suppoed to be the "Characters" and "Worlds" links here but I removed them */}
            <Navbar className='header-nav'>
                <Nav.Link href='/'>
                    <img src={logo} alt='' id='nav-logo' />
                </Nav.Link>
            </Navbar>
        </div>
    )
}

export default HeaderNav;