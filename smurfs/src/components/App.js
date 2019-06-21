import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, deleteSmurf } from '../actions'
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import './App.css'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfs: []
  }
  
  componentDidMount(){
    this.props.getSmurfs()
  }


  handleDelete = e => {
    e.preventDefault();
    let val = e.target.value
    this.props.deleteSmurf(val);
  }

  render() {
    return (
      <div className="conatiner">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm  />
        {this.props.smurfs.map(smurf =>
        <div>
          <Smurf Smurf={smurf} key={smurf.id} click={this.handleDelete}/>
        </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  smurfs : state.smurfs
})
export default connect(mapStateToProps, { getSmurfs, deleteSmurf })(App);
