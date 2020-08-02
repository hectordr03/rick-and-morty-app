import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

// Components
import PageBtns from './PageBtns';
import Episodes from './Episodes';

class Worlds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            next: '',
            prev: '',

            episodeResults: [],
            episodeNext: '',
            episodePrev: '',
        }
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/location/')
            .then(res => {
                this.setState({
                    results: res.data.results,
                    next: res.data.info.next,
                    prev: res.data.info.prev,
                });
            })
        axios.get('https://rickandmortyapi.com/api/episode')
            .then(res => {
                this.setState({
                    episodeResults: res.data.results,
                    episodeNext: res.data.info.next,
                    episodePrev: res.data.info.prev,
                })
                console.log(this.state.episodeNext)
                console.log(this.state.episodePrev)
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
                    prev: res.data.info.prev
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
                    prev: res.data.info.prev
                })
            })
            .catch(err => console.error(err.message))
    }

    render() {
        return (
            <div className='worlds'>
                <h1 className='title'>Worlds and locations</h1>

                {/* Passing next and prev page functions as props to use inside of "PageBtns" */}
                <PageBtns
                    next={() => this.nextPage()}
                    prev={() => this.prevPage()}
                />

                {/* Iterate through results */}
                {/* Display data for each location inside a "Card" component */}
                {this.state.results.map((place) => (
                    <div key={place.id} className='location-list'>
                        <Card className='cards' bg='success'>
                            <Card.Title>{place.name}</Card.Title>
                            <Card.Text>
                                <li>Type: {place.type}</li>
                            </Card.Text>
                        </Card>
                    </div>
                ))}

                {/* Passing API data as props */}
                {/* I wanted to make next and prev page buttons for the episodes list, but I couldn't get them to work inside the component */}
                {/* The Episodes component was a last minute addition some things I would've done differently:
                1. Set state inside of home
                2. Pass state as props into Characters, Episodes and Worlds
                3. Display data using stateless components */}
                <Episodes
                    episodes={this.state.episodeResults}
                    nextPage={this.state.episodeNext}
                    prevPage={this.state.episodePrev}
                />


            </div>
        )
    }
}
export default Worlds;