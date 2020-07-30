import React from 'react';
import axios from 'axios';

class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://rickandmortyapi.com/api/character/?page=1',
            results: [],
            info: [],
            next: '',
            prev: '',
        }

        this.nextPage = this.nextPage.bind(this);
    }

    componentDidMount() {
        axios.get(this.state.url)
            .then(res => {
                this.setState({
                    results: res.data.results,
                    info: res.data.info,
                    next: res.data.info.next,
                    prev: res.data.info.prev
                })
                console.log(`Next page is: ${this.state.info.next}`)
                // console.log(this.state.results)
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
            <div className='characters' >
                <h3>Characters</h3>
                <p>Search bar under page title</p>
                <p>Character list</p>
                <button onClick={(event) => this.prevPage(event)}>Back</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>
                <ul>
                    {this.state.results.map((character) => (
                        <li key={character.id}>
                            {character.name}
                            <img src={character.image} alt='' />
                        </li>
                    ))}
                </ul>
                <button onClick={(event) => this.prevPage(event)}>Back</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>

            </div>
        )
    }
}

export default Characters;