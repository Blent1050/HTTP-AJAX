import React, { Component } from 'react';
import axios from 'axios';
import Friend from './components/Friend';

class App extends Component {
	state = {
    friends: [],
    error: ''
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setState({ friends: res.data, error: '' }))
			.catch((err) => this.setState({ error: 'Error' }));
	}

	render() {
		return( 
    <div className="App">
      {this.state.friends.map(friend => {
        return(
          <div id={friend.id}>
            <h2>{friend.name}</h2>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            
          </div>
        )
      })}
    </div>
    )
	}
}

export default App;
