import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
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
				<nav className='nav'>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/add">Add Friends</NavLink>
				</nav>
				<Route exact path='/' render={props => <FriendContainer {...props} friends={this.state.friends}/>}/>
				<Route path='/add' component={AddFriend}/>
			</div>
		);
	}
}

export default App;


