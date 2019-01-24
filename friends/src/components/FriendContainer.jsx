import React from 'react';
import Friend from './Friend';

const FriendContainer = (props) => {
    const friend = props.friends.find(
        friend => `${friend.id}`
      );
    return(
        <>
        {props.friends.map((friend) => {
            return <Friend populateForm={e => props.populateForm(e, friend.id)} updateItem={props.updateItem} deleteItem={props.deleteItem} key={friend.id} friend={friend} />;
        })}
        </>
    )

}

export default FriendContainer;