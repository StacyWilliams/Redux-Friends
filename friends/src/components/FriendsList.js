import React, { Component } from 'react'
import Friend from './Friend';
import {connect} from 'react-redux';
import {getFriends} from '../actions/';


class FriendList extends Component {
   
   
    componentDidMount(){
        this.props.getFriends()
    }
  render() {


    return (
      <div>
       {this.props.friend.map( (friend, id) =>
        <Friend key ={id}friend ={friend}/>)}
      </div>
    )
  }
}
const mapStateToProps = state =>{
    console.log(state.friend)
    return{
        friend: state.friend
    }
}

export default connect (
    mapStateToProps,
    {getfriends}
)(FriendList)