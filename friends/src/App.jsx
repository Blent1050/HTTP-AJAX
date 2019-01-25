import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import FriendContainer from './components/FriendContainer';
import AddFriend from './components/AddFriend';
import axios from 'axios';

const clearedItem = {
	name: '',
	age: '',
	email: ''
};
class App extends Component {
	state = {
		friends: [],
		friend: clearedItem,
		error: '',
		isUpdating: false
	};

	componentDidMount() {
		axios
			.get('/friends')
			.then((res) => this.setState({ friends: res.data, error: '' }))
			.catch((err) => this.setState({ error: 'Error' }));
	}

	handleChanges = (event) => {
		event.persist();
		this.setState((prevState) => {
			return {
				friend: {
					...prevState.friend,
					[event.target.name]: event.target.value
				}
			};
		});
	};
	//Create
	addItem = () => {
		axios
			.post(`/friends`, this.state.friend)
			.then((res) => {
				this.setState({
					friends: res.data,
					friend: clearedItem
				});
				this.props.history.push('/');
			})
			.catch((err) => console.log(err));
	};

	//Update
	populateForm = (e, id) => {
		e.preventDefault();
		this.setState({
			friend: this.state.friends.find((friend) => friend.id === id),
			isUpdating: true
		});
		this.props.history.push('/add');
	};
	updateItem = () => {
		axios
			.put(`/friends/${this.state.friend.id}`, this.state.friend)
			.then((res) => {
				this.setState({
					friends: res.data,
					isUpdating: false,
					friend: clearedItem
				});
				this.props.history.push('/')
			})
			.catch((err) => console.log(err));
	};

	deleteItem = (e, itemId) => {
		e.preventDefault();
		console.log(itemId);
		axios
			.delete(`/friends/${itemId}`)
			.then((res) => {
				this.setState({ friends: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		console.log(this.state.friends)
		return (
			<div className="App">
				<nav className="nav">
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink to="/add">Add Friends</NavLink>
				</nav>
				<Route
					exact
					path="/"
					render={(props) => (
						<FriendContainer
							populateForm={this.populateForm}
							{...props}
							deleteItem={this.deleteItem}
							friends={this.state.friends}
						/>
					)}
				/>
				<Route
					path="/add"
					render={(props) => (
						<AddFriend
							{...props}
							updateItem={this.updateItem}
							isUpdating={this.state.isUpdating}
							friend={this.state}
							handleChanges={this.handleChanges}
							addItem={this.addItem}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
