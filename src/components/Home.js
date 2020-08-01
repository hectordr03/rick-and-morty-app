import React from 'react';

// Bootstrap imports
import Button from 'react-bootstrap/Button'

// Components
import Welcome from '../components/Welcome'

class Home extends React.Component {
    render() {
        return (
            <div className='home'>
                <Welcome />
                {/* <Button>Click me</Button> */}
            </div>
        )
    }
}

export default Home;