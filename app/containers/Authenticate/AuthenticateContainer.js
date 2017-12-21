import React, { PropTypes } from 'react'
import createReactClass from 'create-react-class'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import * as userActionCreators from 'redux/modules/users'


const AuthenticateContainer = createReactClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUser: PropTypes.func.isRequired,
    fetchingUserFailure: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
  },
  handleAuth() {
    this.props.fetchingUser()
    auth().then((user) => {
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      this.props.authUSer(user.uid)
    })
    .catch((error)=> this.props.fetchingUserFailure(error))
  },
  render () {
    console.log(this.props.isFetching)
    return (
        <Authenticate
          isFetching={this.props.isFetching}
          error={this.props.error}
          onAuth={this.handleAuth} />
    )
  },
})

function mapStateToProps(state) {
  console.log('STATE', state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActionCreators,dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(AuthenticateContainer)