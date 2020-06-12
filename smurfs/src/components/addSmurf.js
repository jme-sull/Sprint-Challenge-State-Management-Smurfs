import React, { useContext }  from 'react'
import { FormContext } from '../contexts/FormContext'

const AddSmurf = () => {

    const { onInputChange, onSubmit, formValues } = useContext(FormContext)
 

    return (
        <div className='form-container'>
            <h2>Add Smurf</h2>
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                        <input 
                            name='name'
                            value={formValues.name}
                            onChange={onInputChange}
                        />
                    <label>Age</label>
                        <input
                            name='age'
                            value={formValues.age}
                            onChange={onInputChange}
                        />
                    <label>Height</label>
                    <input
                        name='height'
                        value={formValues.height}
                        onChange={onInputChange}
                        />

                    <button>Submit</button>
                    
                </form>
        </div>
    )
}

export default AddSmurf