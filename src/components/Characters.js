import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

// Components
import PageBtns from '../components/PageBtns';

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

    // Call API url for the following page of data
    // setState to new data after API call goes through
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

    // Call API url for the previous page of data
    // setState to new data after API call goes through
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
                <h1 className='title'>Characters</h1>

                {/* Passing next and prev page functions as props to use inside of "PageBtns" */}
                <PageBtns
                    next={() => this.nextPage()}
                    prev={() => this.prevPage()}
                />

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

                {/* Passing next and prev page functions as props to use inside of "PageBtns" */}
                <PageBtns
                    next={() => this.nextPage()}
                    prev={() => this.prevPage()}
                />
            </div>
        )
    }
}

export default Characters;