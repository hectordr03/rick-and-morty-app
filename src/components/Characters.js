import React from 'react';

class Characters extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            species: '',
            origin: '',
            location: '', // last seen location
            // episode: [], 
            image: '',
        }
    }

    render() {
        return (
            <div className='characters'>
                <h3>Characters</h3>
                <p>Search bar under page title</p>
                <p>Character list</p>
            </div>
        )
    }
}

export default Characters;