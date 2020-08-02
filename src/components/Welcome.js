import React from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron'

function Welcome() {
    return (
        <Jumbotron className='welcome'>
            <h1>Wubba lubba dub-dub</h1>
            {/* Text is from a Rick and Morty lorem ipsum website. I wanted to include a funny and charming welcome message but I couldn't think of anything so I used the lorem ipsum which is kind of funny to me. */}
            <p>"And"? What more do you want tacked on to this? I turned myself into a pickle, and 9/11 was an inside job?" I dunno, some people would pay top dollar for that kind of breakthrough. Listen, Morty, I hate to break it to you but what people call love is just a chemical reaction that compels animals to breed. What, cover me in gasoline and spiders? Fine, yeah, I'm in.</p>
        </Jumbotron>
    )
}

export default Welcome;