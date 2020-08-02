import React from 'react';

// Components
import Welcome from '../components/Welcome';

// Images
import locationImg from '../assets/images/r&m-locations.png'
import characterImg from '../assets/images/r&m-characters.png'

const Home = () => {
    return (
        <div className='home'>
            <Welcome className='welcome' />
            <div className='home-links'>
                <a href='/characters' className='links'>
                    <h3>Characters</h3>
                    <img src={characterImg} alt='' className='link-images' />
                </a>
                <a href='/worlds' className='links'>
                    <h3>Worlds</h3>
                    <img src={locationImg} alt='' className='link-images' />
                </a>
            </div>
        </div>
    )
}

export default Home;