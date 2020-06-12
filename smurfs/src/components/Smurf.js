import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'

const Smurf = props => {

    const { removeSmurf } = useContext(SmurfContext)

    return (
        <div className='smurf-container'>
            <img></img>
            <h2>{props.smurf.name}</h2>
            <p>{props.smurf.age}</p>
            <p>{props.smurf.height}</p>
            <button onClick={() => removeSmurf(props.smurf.id)}>Delete</button>
        </div>
    )
}

export default Smurf