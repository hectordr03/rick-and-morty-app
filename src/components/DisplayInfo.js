import React from 'react'

// Bootstrap imports
import Modal from 'react-bootstrap/Modal'

const DisplayInfo = (props) => {
    return (
        <div>
            <Modal className='info-modal' show={false}>
                <Modal.Body></Modal.Body>
            </Modal>
        </div>
    )
}

export default DisplayInfo;