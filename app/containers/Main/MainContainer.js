import React from 'react'
import createReactClass from 'create-react-class'

const MainContainer = createReactClass({
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  },
})

export default MainContainer
