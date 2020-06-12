import React, { useState, useEffect } from "react";
import { SmurfContext } from '../contexts/SmurfContext.js'
import { FormContext } from '../contexts/FormContext.js'

import axios from 'axios'
import "./App.css";

import Smurfs from './Smurfs'
import AddSmurf from './addSmurf'
import { Route } from 'react-router-dom'


const initialFormValues = {

    name: '',
    age: '',
    height: ''
  
  }




function App() {

  const [ smurfs, setSmurfs ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues)
  

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

      setFormValues({
        ...formValues,
        [name]: value 
    })
  }

    const onSubmit = evt => {
      evt.preventDefault()
  
      const newSmurf = {
        name: formValues.name.trim(),
        age: formValues.age.trim(),
        height: formValues.height.trim(),
        id: new Date()
      }

      postNewSmuf(newSmurf)
    }

    const postNewSmuf = newSmurf => {
  
      axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
          console.log(res.data)
          setSmurfs(res.data)
        })
        .catch(err => {
          debugger
        })
        .finally(() => {
          setFormValues(initialFormValues)
        })
    }


  useEffect(() => { 
    axios.get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(res)
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])

    
    
  const removeSmurf = smurfID => {

      axios.delete(`http://localhost:3333/smurfs/${smurfID}`)
      .then(res => {
        setSmurfs(res.data)
      })
      .catch(err => {
        debugger
      })

    }

    return (
    <SmurfContext.Provider value={{smurfs, removeSmurf}}>
      <FormContext.Provider value={{onInputChange, onSubmit, formValues}}>
                  <Smurfs/>
                  <AddSmurf/>
        </FormContext.Provider>
    </SmurfContext.Provider>
    )

}

export default App;
