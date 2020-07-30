import React from 'react';
import axios from 'axios';

class Worlds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
            results: [],
        }
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                this.setState({ results: res.data.results });
                this.setState({ info: res.data.info })
                // console.log(this.state.results)
                // console.log(this.state.info)
            })
            .catch(err => console.error(err.message))
    }


    render() {
        return (
            <div>
                {this.state.results.map((place) => (
                    <li key={place.id}>
                        {place.name}
                    </li>
                ))}
            </div>
        )
    }
}
export default Worlds;