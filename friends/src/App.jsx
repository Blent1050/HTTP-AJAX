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
          <Friend key={friend.id} friend={friend}/>
        )
      })}
    </div>
    )
	}
}

export default App;
