import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from './id-context'

class IdConsumer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    idContext: PropTypes.shape({
      prefix: PropTypes.string.isRequired,
      counter: PropTypes.number.isRequired
    }).isRequired
  }

  constructor(props) {
    super()
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
    children: PropTypes.func.isRequired
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
