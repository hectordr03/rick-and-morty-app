import React from 'react';
import axios from 'axios';

class Worlds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            info: [],
            next: '',
            prev: '',
        }
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                this.setState({
                    results: res.data.results,
                    info: res.data.info,
                    next: res.data.info.next,
                    prev: res.data.info.prev,
                });
                console.log(this.state.results)
                console.log(this.state.info)
            })
            .catch(err => console.error(err.message))
    }

    nextPage = () => {
        axios.get(this.state.next)
            .then(res => {
                this.setState({
                    results: res.data.results,
                    info: res.data.info,
                    next: res.data.info.next,
                    prev: res.data.info.prev
                })
            })
            .catch(err => console.error(err.message))
    }

    prevPage = () => {
        axios.get(this.state.prev)
            .then(res => {
                this.setState({
                    results: res.data.results,
                    info: res.data.info,
                    next: res.data.info.next,
                    prev: res.data.info.prev
                })
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
                <button onClick={(event) => this.prevPage(event)}>Prev</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>
            </div>
        )
    }
}
export default Worlds;