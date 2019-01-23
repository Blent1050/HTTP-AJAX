import React from 'react';
import Friend from './Friend';

const FriendContainer = (props) => {
    return(
        <>
        {props.friends.map((friend) => {
            return <Friend key={friend.id} friend={friend} />;
        })}
        </>
    )

}

export default FriendContainer;