import React from 'react';
import Friend from './Friend';

 function FriendsList() {
   
   
    return(
      <div>
       {this.props.friends.map( (friend, id) =>
        <Friend key ={id}friend ={friend}/>)}
      </div>
    )
}


export default FriendsList;