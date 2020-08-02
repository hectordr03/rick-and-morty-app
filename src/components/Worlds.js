import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
                <h1 className='title'>Worlds and locations</h1>

                <div className='buttons'>
                    <Button size='lg' onClick={(event) => this.prevPage(event)}>Prev</Button>
                    <Button size='lg' onClick={(event) => this.nextPage(event)}>Next</Button>
                </div>

                <ul className='location-list'>
                    {this.state.results.map((place) => (
                        <div key={place.id} >
                            <Card className='cards' bg='success'>
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