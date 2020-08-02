import React from 'react';
import axios from 'axios';

// Bootstrap imports
import Card from 'react-bootstrap/Card';

// Components
import PageBtns from './PageBtns';

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

                <ul className='location-list'>
                    {/* Iterate through results */}
                    {/* Display data for each location inside a "Card" component */}
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

                {/* Passing next and prev page functions as props to use inside of "PageBtns" */}
                <PageBtns
                    next={() => this.nextPage()}
                    prev={() => this.prevPage()}
                />
            </div>
        )
    }
}
export default Worlds;