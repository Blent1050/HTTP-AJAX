import React from 'react';
import styled from 'styled-components';



const Friend = (props) => {
	return (
		<FriendContainer>
			<FriendName>{props.friend.name}</FriendName>
			<p>Age: {props.friend.age}</p>
			<p>Email: {props.friend.email}</p>
		</FriendContainer>
	);
};

export default Friend;


const FriendContainer = styled.div`
	text-align: center;
	box-shadow: -1px 1px 31px -5px rgba(0,0,0,0.16);
	border: 1px solid #e6e6e6;
	width: 50%;
	margin: 5px auto;
	padding: 5px;
`
const FriendName = styled.h2`
	margin: 0;
	padding: 0;
`