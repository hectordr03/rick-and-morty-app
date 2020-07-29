import React from 'react';
import axios from 'axios';

class Worlds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: [],
        }
    }

    componentDidMount() {
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(res => {
                this.setState({ info: res.data.results });
                console.log(this.state.info)
            })
            .catch(err => console.error(err.message))
    }
}