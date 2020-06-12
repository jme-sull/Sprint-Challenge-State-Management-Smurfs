import React, { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext'

import Smurf from './Smurf'

const Smurfs = () => {

    const { smurfs } = useContext(SmurfContext)

    return (
        <div className='App'>
            <h2>My Smurf Village</h2>
        
                <div className='smurf-village'>
                    
                    {
                        smurfs.map(item => (
                            <Smurf key={item.id} smurf={item}/>
                        ))

                    }
            </div>
    </div>
    )
}

export default Smurfs