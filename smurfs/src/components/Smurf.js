import React from 'react';
import { deleteSmurf } from '../actions';

const Smurf = props =>{
    return (
        <div>
            <h1>Name: {props.Smurf.name}</h1>
            <p>Age: {props.Smurf.age} years old.</p>
            <p>Height: {props.Smurf.height}</p>
        </div>

    )
}

export default Smurf;