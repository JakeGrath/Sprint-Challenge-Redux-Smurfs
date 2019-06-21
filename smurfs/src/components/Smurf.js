import React from 'react';

const Smurf = props =>{
    return (
        <div className='container-smurfs'>
            <h1>Name: {props.Smurf.name}</h1>
            <p className='info'>Age: {props.Smurf.age} years old.</p>
            <p className='info'>Height: {props.Smurf.height}</p>
          <button className='delete smurf-button' value={props.Smurf.id} onClick={props.click}>Delete</button>
        </div>

    )
}

export default Smurf;