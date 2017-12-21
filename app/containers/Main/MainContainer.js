import React from 'react'
import { Navigation } from 'components'
import createReactClass from 'create-react-class'
import { container, innerContainer } from './styles.css'

const MainContainer = createReactClass({
  render () {
    return (
      <div className={container}>
        <Navigation isAuthed={false} />
        <div className={innerContainer}>
          {this.props.children}
        </div>
      </div>
    )
  },
})

export default MainContainer
