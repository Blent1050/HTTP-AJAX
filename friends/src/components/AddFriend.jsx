import React from 'react';
import styled from 'styled-components';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const AddFriend = (props) => {
	return (
		<AddFriendContainer>
			<h1>Add a friend!</h1>
			<FormGroup>
				<Inputs />
			</FormGroup>
		</AddFriendContainer>
	);
};

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
	const { classes } = props;
	return (
		<div>
			<Input
				placeholder="Name"
				inputProps={{
					'aria-label': 'Description'
				}}
				type="text"
			/>{' '}
			<br />
			<Input
				placeholder="Age"
				inputProps={{
					'aria-label': 'Description'
				}}
				type="number"
			/>
			<br />
			<Input
				placeholder="Email"
				inputProps={{
					'aria-label': 'Description'
				}}
				type="email"
			/>
			<br /> <br />
			<Button variant="contained" color="primary">
				Submit
			</Button>
		</div>
	);
}
