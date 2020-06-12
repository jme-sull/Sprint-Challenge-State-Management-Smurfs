import React, { useState, useEffect } from "react";
import { SmurfContext } from '../contexts/SmurfContext.js'

import axios from 'axios'
import "./App.css";

import Smurfs from './Smurfs'

function App() {

  const [ smurfs, setSmurfs ] = useState([]);

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

    return (
    <SmurfContext.Provider value={{smurfs}}>
        <Smurfs/>
    </SmurfContext.Provider>
    )

}

export default App;
