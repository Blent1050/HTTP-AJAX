import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Friend = (props) => {
	return (
		<FriendContainer>
			<FriendName />
			<h2>{props.friend.name}</h2>
			<p>Age: {props.friend.age}</p>
			<p>Email: {props.friend.email}</p>
			<div>
				<Button onClick={e => props.populateForm(e, props.friend.id)} variant="contained" color="primary">
					Update
				</Button>
			</div>
			<Button onClick={(e) => props.deleteItem(e, props.friend.id)} variant="contained" color="secondary">
				Delete
			</Button>
		</FriendContainer>
	);
};

export default Friend;

const FriendContainer = styled.div`
	text-align: center;
	box-shadow: -1px 1px 31px -5px rgba(0, 0, 0, 0.16);
	border: 1px solid #e6e6e6;
	width: 50%;
	margin: 5px auto;
	padding: 5px;
`;
const FriendName = styled.h2`
	margin: 0;
	padding: 0;
`;
