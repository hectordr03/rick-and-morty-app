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
// The Welcome message was just so I could try some other Bootstrap components I haven't used yet. It was originally a Modal but I removed it because it got annoying to close everytime I refreshed the home page.
// I settled on the "Jumbotron" component just to show what a message on the home page would look like
// Also originally I wanted there to be a search bar that you can look up the characters/episodes/locations with but that seemed like a tough concept I was going to tackle later in the project but I didn't include it in the end.