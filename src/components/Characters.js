import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Characters extends React.Component {
    constructor(props) {
        super(props);

        // Set initial state
        // url is initial API call
        // API data is saved in "results"
        // next and prev save the API calls for the following and previous page of characters

        this.state = {
            url: 'https://rickandmortyapi.com/api/character/?page=1',
            results: [],
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
                    prev: res.data.info.prev,
                })
            })
            .catch(err => console.error(err.message))
    }

    nextPage = () => {
        axios.get(this.state.next)
            .then(res => {
                this.setState({
                    results: res.data.results,
                    next: res.data.info.next,
                    prev: res.data.info.prev,
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
                    prev: res.data.info.prev,
                })
            })
            .catch(err => console.error(err.message))
    }

    render() {
        return (
            <div className='characters' >
                <h1>Characters</h1>

                <div className='buttons'>
                    <Button size='lg' onClick={(event) => this.prevPage(event)}>Back</Button>
                    <Button size='lg' onClick={(event) => this.nextPage(event)}>Next</Button>
                </div>

                <ul className='character-list'>
                    {this.state.results.map((character) => (
                        <div>
                            <Card className='cards' bg='info' key={character.id} >
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
                        </div>
                    ))}
                </ul>

                <div className='buttons'>
                    <Button size='lg' onClick={(event) => this.prevPage(event)}>Back</Button>
                    <Button size='lg' onClick={(event) => this.nextPage(event)}>Next</Button>
                </div>
            </div>
        )
    }
}

export default Characters;