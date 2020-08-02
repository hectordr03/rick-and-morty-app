import React from 'react';

// Bootstrap imports
import Table from 'react-bootstrap/Table';

function Episodes(props) {
    return (
        <div>
            <h3 className='title'>Episode List</h3>
            <Table className='episode-list'>
                <thead>
                    <tr>
                        <th>Episode Title</th>
                        <th>Episode Number</th>
                        <th>Air Date</th>
                    </tr>
                </thead>

                {/* Iterates through data in property "episodes" */}
                {/* Creates a new row for each episode in episode */}
                {/* Display data recieved from the API call for episodes inside table data cells */}
                {props.episodes.map(ep => (
                    <tr>
                        <td>{ep.name}</td>
                        <td>{ep.episode}</td>
                        <td>{ep.air_date}</td>
                    </tr>
                ))}

            </Table>
        </div>
    )
}

export default Episodes
