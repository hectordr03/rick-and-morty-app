import React from 'react'

import Button from 'react-bootstrap/Button';

function PageBtns(props) {
    return (
        <div className='buttons'>
            <Button size='lg' onClick={props.prev}>Prev</Button>
            <Button size='lg' onClick={props.next}>Next</Button>
        </div>
    )
}

export default PageBtns
