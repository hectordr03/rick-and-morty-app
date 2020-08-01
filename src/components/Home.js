import React from 'react';

// Bootstrap imports
import Button from 'react-bootstrap/Button'

// Components
import Welcome from '../components/Welcome'

// Images
import locationImg from '../assets/images/r&m-locations.png'
// import characterImg from '../assets/images/r&m-characters-image.png'

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                {/* <Welcome /> */}
                <a href='#' className='link'>
                    <h3>Worlds</h3>
                    <img src={locationImg} alt='' id='location-image'/>
                </a>
                <div className='link'>
                    <h3>Characters</h3>
                    {/* <img src={characterImg} alt='' id='location-image'/> */}
                </div>
            </div>
        )
    }
}

export default Home;