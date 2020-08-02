import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

class Worlds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            next: '',
            prev: '',
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
            <div className='worlds'>
                <h1>Worlds and locations</h1>

                <div className='buttons'>
                    <Button size='lg' onClick={(event) => this.prevPage(event)}>Prev</Button>
                    <Button size='lg' onClick={(event) => this.nextPage(event)}>Next</Button>
                </div>

                <ul className='location-list'>
                    {this.state.results.map((place) => (
                        <div>
                            <Card className='cards' bg='success' key={place.id} >
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>
                                    <li>Type: {place.type}</li>
                                </Card.Text>
                            </Card>
                        </div>
                    ))}
                </ul>

                <div className='buttons'>
                    <Button size='lg' onClick={(event) => this.prevPage(event)}>Prev</Button>
                    <Button size='lg' onClick={(event) => this.nextPage(event)}>Next</Button>
                </div>
            </div>
        )
    }
}
export default Worlds;