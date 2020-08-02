import React from 'react';

// Components
import Welcome from '../components/Welcome';

// Images
import locationImg from '../assets/images/r&m-locations.png'
import characterImg from '../assets/images/r&m-characters.png'

const Home = () => {
    return (
        <div className='home'>
            {/* Displays fake welcome message with some wonderful Rick and Morty lorem ipsum */}
            <Welcome />

            <div className='home-links'>
                {/* Anchor tag is linked to component's router path */}
                <a href='/characters' className='links'>
                    <h3>Characters</h3>
                    {/* Set some fun png images of Rick and Morty inside links */}
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

// It took me a while to get good images for the link divs
// Also I originally had a red border on it so I could see the div better as I coded but I ended up liking the way it looked, so I changed it to a yellow border to better fit the color themes on the show
// The Welcome message was just so I could try some other Bootstrap components I haven't used yet. It was originally a Modal but I ended up removing it because I didn't know how to keep the closed after initially opeing it