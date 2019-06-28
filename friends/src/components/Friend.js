import React from 'react'

 const Friend = props => {
  return (
    <div>
      <h3>{props.friends.friend}</h3>
      <h4> {props.friend.age} </h4>
      <p>  {props.friend.email} </p>
    </div>
  )
}

export default Friend;
