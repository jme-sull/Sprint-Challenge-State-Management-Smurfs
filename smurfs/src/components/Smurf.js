import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'
import smurf from '../images/smurf.png'

const Smurf = props => {

    const { removeSmurf } = useContext(SmurfContext)

    return (
        <div className='smurf-container'>
            <img src={smurf}></img>
            <h2>Name: {props.smurf.name}</h2>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <button onClick={() => removeSmurf(props.smurf.id)}>Delete</button>
        </div>
    )
}

export default Smurf