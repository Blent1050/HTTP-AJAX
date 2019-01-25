import React from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


const AddFriend = props => {
	const {friends, friend, error} = props;

	function handleSubmit(e){
		e.preventDefault();
		if(props.isUpdating){
			props.updateItem();
		}else{
			props.addItem();
		}
	}
	return (
		<AddFriendContainer>
			<h1>Add a friend!</h1>
			<FormGroup>
			<form onSubmit={handleSubmit}>
				<Inputs friend={friend} addItem={props.addItem} handleChanges={props.handleChanges}/>
			</form>
			</FormGroup>
		</AddFriendContainer>
	);
}


export default AddFriend;

const AddFriendContainer = styled.div`
	margin: 0 auto;
	width: 50%;
    text-align: center;
    form{ 
        margin-bottom: 10px;
    }
`;

function Inputs(props) {
	console.log(props)
	return (
		<>
			<Input
				placeholder="Name"
				value={props.friend.friend.name}
				onChange={props.handleChanges}
				name='name'
				inputProps={{
					'aria-label': 'Description'
				}}
				required
			/>{' '}
			<br />
			<Input
				placeholder="Age"
				value={props.friend.friend.age}
				name='age'
				onChange={props.handleChanges}
				inputProps={{
					'aria-label': 'Description'
				}}
				type="number"
				required
			/>
			<br />
			<Input
				value={props.friend.friend.email}
				placeholder="Email"
				name='email'
				onChange={props.handleChanges}
				inputProps={{
					'aria-label': 'Description'
				}}
				type="email"
				required
			/>
			<br /> <br />
			<Button type='submit' variant="contained" color="primary">
				Submit
			</Button>
		</>
	);
}
