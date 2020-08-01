import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

import NextPage from '../components/NextPage'

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
                    next: res.data.info.next,
                    prev: res.data.info.prev
                })
                // console.log(`Next page is: ${this.state.info.next}`)
                console.log(this.state.prev)
                console.log(this.state.next)
                console.log(this.state.url)
            })
            .catch(err => console.error(err.message))
    }


    nextPage = () => {
        axios.get(this.state.next)
            .then(res => {
                this.setState({
                    results: res.data.results,
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
                    next: res.data.info.next,
                    prev: res.data.info.prev
                })
            })
            .catch(err => console.error(err.message))
    }

    render() {
        return (
            <div className='characters' >
                <h1>Characters</h1>
                <button onClick={(event) => this.prevPage(event)}>Back</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>
                <ul className='character-list'>
                    {this.state.results.map((character) => (
                        <Card key={character.id} className='cards' bg='info'>
                            <Card.Img src={character.image} alt='' className='images' />
                            <Card.Body>
                                <Card.Title>{character.name}</Card.Title>
                                <Card.Text>
                                    <li>Status: {character.status}</li>
                                    <li>Species: {character.species}</li>
                                    <li>Origin: {character.origin.name}</li>
                                    <li>Current location: {character.location.name}</li>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </ul>
                <button onClick={(event) => this.prevPage(event)}>Back</button>
                <button onClick={(event) => this.nextPage(event)}>Next</button>

                {/* Testing functional component */}

                <NextPage 
                    next={this.state.next}
                    prev={this.state.prev}
                    page={this.state.url}
                    />

                {/* End of test */}

            </div>
        )
    }
}

export default Characters;