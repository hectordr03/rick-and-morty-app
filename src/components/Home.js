import React from 'react';

// Bootstrap imports
import Button from 'react-bootstrap/Button'

// Components
import Welcome from '../components/Welcome'

// Images
import locationImg from '../assets/images/r&m-locations.png'

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                {/* <Welcome /> */}
                <div className='location-link'>
                    <h3>Wha-wha *burps* What's out there? Let's go check it out Morty</h3>
                    <img src={locationImg} alt='' id='location-image'/>
                </div>
            </div>
        )
    }
}

export default Home;