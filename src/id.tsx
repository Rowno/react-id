import React, {Component, ReactNode} from 'react'
import PropTypes from 'prop-types'
import {Consumer, IdContext} from './id-context'

class IdConsumer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    idContext: PropTypes.shape({
      prefix: PropTypes.string.isRequired,
      counter: PropTypes.number.isRequired
    }).isRequired
  }

  props: {
    children: (id: string) => ReactNode,
    idContext: IdContext
  }

  id: string

  constructor(props) {
    super(props)
    const {idContext} = props

    this.id = idContext.prefix + idContext.counter
    idContext.counter += 1
  }

  render() {
    return this.props.children(this.id)
  }
}

export default class Id extends Component {
  static propTypes = {
    /** Render props function that gets passed the ID */
    children: PropTypes.func.isRequired
  }

  props: {
    children: (id: string) => ReactNode
  }

  render() {
    return (
      <Consumer>
        {idContext => {
          return (
            <IdConsumer idContext={idContext}>{this.props.children}</IdConsumer>
          )
        }}
      </Consumer>
    )
  }
}
