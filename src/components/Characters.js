import React from 'react';
import axios from 'axios';

class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'https://rickandmortyapi.com/api/character/?page=1',
            info: [],
            results: [],
        }
    }

    nextPage = () => {
        this.setState({ page: `${this.state.info.next}` })
    }

    componentDidMount() {
        axios.get(this.state.page)
            .then(res => {
                this.setState({ results: res.data.results, info: res.data.info})
                console.log(`Next page is: ${this.state.info.next}`)
                console.log(this.state.results)
                console.log(this.state.info)
            })
            .catch(err => console.error(err.message))
    }


    // ********** I need a function that will update state after a button click **********

    // nextPage = () => {
    //     this.setState({ page:`${this.state.info.next}`  })
    // }

    render() {
        return (
            <div className='characters'>
                <h3>Characters</h3>
                <p>Search bar under page title</p>
                <p>Character list</p>
                <ul>
                    {this.state.results.map((character) => (
                        <li key={character.id}>
                            {character.name}
                            <img src={character.image} alt='' />
                        </li>
                    ))}
                </ul>
                {/* <button onClick={this.nextPage()}>Next</button> */}

            </div>
        )
    }
}

export default Characters;