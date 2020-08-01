import React from 'react';

// Bootstrap imports
import Button from 'react-bootstrap/Button'

// Components
import Welcome from '../components/Welcome'

// Images
import locationImg from '../assets/images/r&m-locations.png'
import characterImg from '../assets/images/r&m-characters.png'

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                {/* <Wel#343A40come /> */}
                <a href='/worlds' className='links'>
                    <h3>Worlds</h3>
                    <img src={locationImg} alt='' className='link-images'/>
                </a>
                <a href='/characters' className='links'>
                    <h3>Characters</h3>
                    <img src={characterImg} alt='' className='link-images'/>
                </a>
            </div>
        )
    }
}

export default Home;