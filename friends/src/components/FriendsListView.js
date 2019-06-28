import React , { Component} from 'react';
import FriendsList from './FriendsList';
import { connect } from 'react-redux';

 class FriendsListView extends Component {
    render() {
        console.log('props View' ,this.props.friends)
      return (
          <div>
              <FriendsList friends={this.props.friends}/>
          </div>
      )
    }
   
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    friends: state.friends
})

export default connect(mapStateToProps)(FriendsListView)