import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFriends, logInUser} from '../actions'

 class Login extends Component {
     state = {
         creds:{
         username: '',
         password: ''
         }
     }
    
   handlechange = (e) => {
      e.preventDefault();
      this.setState({
      creds:{
            ...this.state.creds,
            [e.target.name] : e.target.value
            }
        })
     }
 
 handleSubmit = (e) => {
   e.preventDefault();
   this.props.logInUser(this.state.creds)
  
 }

componentDidMount() {
   this.props.getFriends()
   }

  render() {
      

    console.log(this.props)
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
        <input onChange = {this.handlechange}
        type ="text"
        placeholder ='username'
        name = "username"
        value = {this.state.username}

        />
        <input onChange = {this.handlechange}
        type ="password"
        placeholder ='password'
        name = "password"
        value = {this.state.password}

        />

        <button value ="submit">submit</button>




        </form>
      </div>
    )
  }
}
 const mapStateToProps = state =>({
     isfetching:state.isfetching,
     isLoggingIn: state.isLoggingIn,
     token:state.token
 })

export default connect (
    mapStateToProps,
    {getFriends,logInUser}
)(Login)