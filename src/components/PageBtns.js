import React from 'react'

import Button from 'react-bootstrap/Button';

function PageBtns(props) {
    return (
        <div className='buttons'>
            {/* Created component to avoid writing multiple buttons with the same function amongst the "Characters" and "Worlds" components */}
            <Button size='lg' onClick={props.prev}>Prev</Button>
            <Button size='lg' onClick={props.next}>Next</Button>
        </div>
    )
}

export default PageBtns
