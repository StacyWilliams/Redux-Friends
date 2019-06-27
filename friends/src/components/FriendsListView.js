import React , { Component} from 'react';
import FriendsList from './FriendsList';
import {getFriends}  from './actions'
import { connect } from 'react-redux';

 class FriendsListView extends Component {
    render() {
      return (
          <div>
              <FriendsList />
          </div>
      )
    }
   
}

const mapStateToProps= state => ({
    isFetching: state.isFetching,
    friends: state.friends
})

export default connect(mapStateToProps, {getFriends})(FriendsListView)