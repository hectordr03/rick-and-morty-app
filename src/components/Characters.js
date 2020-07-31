import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

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
                // console.log(`Next page is: ${this.state.info.next}`)
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
            <div className='characters' >
                <h3>Characters</h3>
                <p>Search bar under page title</p>
                <p>Character list</p>
                <button onClick={(event) => this.prevPage(event)}>Back</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>
                <ul className='character-list'>
                    {this.state.results.map((character) => (
                        <Card key={character.id} className='cards' bg='info'>
                            {/* <li key={character.id}>
                            {character.name}
                            <br />
                            <img src={character.image} alt='' />
                            <ul>
                                <li>Status: {character.status}</li>
                                <li>Species: {character.species}</li>
                                <li>Origin: {character.origin.name}</li>
                                <li>Current location: {character.location.name}</li>
                            </ul>
                        </li> */}
                            <Card.Img src={character.image} alt='' className='images' />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Status: {character.status}</li>
                                        <li>Species: {character.species}</li>
                                        <li>Origin: {character.origin.name}</li>
                                        <li>Current location: {character.location.name}</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </ul>
                <button onClick={(event) => this.prevPage(event)}>Back</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>

            </div>
        )
    }
}

export default Characters;