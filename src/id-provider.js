import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider, defaultPrefix} from './id-context'

export default class IdProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    prefix: PropTypes.string
  }

  static defaultProps = {
    prefix: defaultPrefix
  }

  constructor(props) {
    super()

    this.idContext = {
      counter: 1,
      prefix: props.prefix
    }
  }

  render() {
    return <Provider value={this.idContext}>{this.props.children}</Provider>
  }
}
