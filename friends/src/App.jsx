import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import FriendContainer from './components/FriendContainer';
import AddFriend from './components/AddFriend';
import axios from 'axios';


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
		return (
			<div className="App">
				<nav>
					<Link to="/">Home</Link>
					<Link to="/add">Add Friends</Link>
				</nav>
				<Route exact path='/' render={props => <FriendContainer {...props} friends={this.state.friends}/>}/>
				<Route path='/add' component={AddFriend}/>
			</div>
		);
	}
}

export default App;
