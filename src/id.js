import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Consumer} from './id-context'

/**
 * @typedef {import('./id-context').IdContext} IdContext
 */

/**
 * @callback renderProps
 * @param {string} id
 * @returns {React.ReactNode}
 */

/**
 * @typedef {object} IdConsumerProps
 * @prop {renderProps} children
 * @prop {IdContext} idContext
 *
 * @extends {Component<IdConsumerProps>}
 */
class IdConsumer extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    idContext: PropTypes.shape({
      prefix: PropTypes.string.isRequired,
      counter: PropTypes.number.isRequired
    }).isRequired
  }

  /** @param {IdConsumerProps} props Properties */
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

/**
 * @typedef {object} IdProps
 * @prop {renderProps} children
 *
 * @extends {Component<IdProps>}
 */
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
