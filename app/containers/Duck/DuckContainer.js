import React, { PropTypes } from 'react'
import createReactClass from 'create-react-class'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActions from 'redux/modules/usersLikes'

const { func, object, bool, number } = PropTypes

const DuckContainer = createReactClass({
  propTypes: {
    duck: object.isRequired,
    handleClick: func,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    isLiked: bool.isRequired,
    numberOfLikes: number,
    addAndHandleLike: func.isRequired,
    handleDeleteLike: func.isRequired,
  },
  contextTypes: {
    router: PropTypes.object.isRequired,
  },
  getDefaultProps () {
    return {
      hideReplyBtn: false,
      hideLikeCount: true,
    }
  },
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push('/' + this.props.duck.get('uid'))
  },
  handleClick (e) {
    e.stopPropagation()
    this.context.router.push('ducks/' + this.props.duck.get('duckId'))
  },
  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props} />
    )
  },
})

function mapStateToProps ({ducks, likeCount,usersLikes}, props) {
  return {
    duck: ducks.get(props.duckId),
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DuckContainer)
