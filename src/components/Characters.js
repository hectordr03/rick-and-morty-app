import React from 'react';
import axios from 'axios';

class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [{
                name: '',
                id: '',
            }],
        }
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                this.setState({ info: [res.data.results] });
                console.log(this.state.info)
            })
            .catch(err => console.error(err.message))
    }

    render() {
        return (
            <div className='characters'>
                <h3>Characters</h3>
                <p>Search bar under page title</p>
                <p>Character list</p>
                {this.state.info.map((data) => (
                    <li key={data.id}> {data.name} </li>
                ))}

            </div>
        )
    }
}

export default Characters;