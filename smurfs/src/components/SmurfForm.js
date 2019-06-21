import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>Add a new smurf!</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.age}
                        onChange={this.handleChanges}
                    />
                    <input
                        type='text'
                        name='height'
                        placeholder='Height'
                        value={this.state.height}
                        onChange={this.handleChanges}
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { addSmurf }
)(SmurfForm);