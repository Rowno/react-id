import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider, defaultPrefix} from './id-context'

/**
 * @typedef {object} IdProviderProps
 * @prop {React.ReactNode} children
 * @prop {string} [prefix="🆔id-"]
 *
 * @extends {Component<IdProviderProps>}
 */
export default class IdProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    prefix: PropTypes.string
  }

  static defaultProps = {
    prefix: defaultPrefix
  }

  /**
   * @param {IdProviderProps} props Properties
   */
  constructor(props) {
    super(props)

    /** @type {import('./id-context').IdContext} */
    this.idContext = {
      counter: 1,
      prefix: props.prefix
    }
  }

  render() {
    return <Provider value={this.idContext}>{this.props.children}</Provider>
  }
}
