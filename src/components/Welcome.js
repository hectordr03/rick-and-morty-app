import React from 'react';

// Bootstrap imports
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class Welcome extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true,
        }
    }

    close = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        return (
            <div>
                <Modal show={this.state.isOpen} onHide={() => this.close()} centered >
                    <Modal.Header closeButton>Welcome person!</Modal.Header>
                    <Modal.Body>Sum-Sum, let’s go! Grandpa’s concern for your safety is fleeting! Merchandise Morty, your only purpose in life is to buy & consume merchandise and you did it, you went into a store an actual honest to god store and you bought something, you didn't ask questions or raise ethical complaints you just looked into the bleeding jaws of capitalism and said 'yes daddy please' and I'm so proud of you, I only wish you could have bought more, I love buying things so much Morty. He threatened to turn me in to the government, so I made him and the government go away! Aw, geez.</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => this.close()}>Explore!</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Welcome;