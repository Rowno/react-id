import React, {Component, ReactNode} from 'react'
import PropTypes from 'prop-types'
import {Provider, defaultPrefix, IdContext} from './id-context'

export default class IdProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    prefix: PropTypes.string
  }

  static defaultProps = {
    prefix: defaultPrefix
  }

  props: {
    children: ReactNode,
    prefix?: string
  }

  idContext: IdContext

  constructor(props) {
    super(props)

    this.idContext = {
      counter: 1,
      prefix: props.prefix
    }
  }

  render() {
    return <Provider value={this.idContext}>{this.props.children}</Provider>
  }
}
