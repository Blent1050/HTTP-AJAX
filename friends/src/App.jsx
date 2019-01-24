import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import FriendContainer from './components/FriendContainer';
import AddFriend from './components/AddFriend';
import axios from 'axios';


class App extends Component {
	state = {
		friends: [],
		name: '',
		age: 0,
		email: '',
		error: ''
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((res) => this.setState({ friends: res.data, error: '' }))
			.catch((err) => this.setState({ error: 'Error' }));
	}

	postMessage = (e) => {
		e.preventDefault();
        axios
          .post(`http://localhost:5000/friends`, { 
			  name:this.state.name,
			  age:this.state.age,
			  email:this.state.email
		  })
          .then(res =>{
			this.setState({
				friends: res.data,
				name: '',
				age: '',
				email:''
			})
		  })
          .catch(err => console.log(err));
	};

	handleChanges = event => {
		this.setState({ 
			[event.target.name]: event.target.value });
	  };

	render() {
		console.log(this.state.friends)
		return (
			<div className="App">
				<nav className='nav'>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/add">Add Friends</NavLink>
				</nav>
				<Route exact path='/' render={props => <FriendContainer {...props} friends={this.state.friends}/>}/>
				<Route path='/add' render={ props => <AddFriend {...props} friend={this.state} handleChanges={this.handleChanges} postMessage={this.postMessage} />}/>
			</div>
		);
	}
}

export default App;


