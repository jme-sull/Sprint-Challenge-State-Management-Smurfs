import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'

import Smurf from './Smurf'

const Smurfs = () => {

    const { smurfs } = useContext(SmurfContext)

    return (
        <div className='smurf-village'>
            <h2>My Smurf Village</h2>
            {
                smurfs.map(item => (
                    <Smurf key={item.id} smurf={item}/>
                ))

            }
        </div>
    )
}

export default Smurfs