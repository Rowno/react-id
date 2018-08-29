import React from 'react'

const defaultPrefix = '🆔id-'

/**
 * @typedef {object} IdContext
 * @prop {number} counter
 * @prop {string} prefix
 */

/** @type {IdContext} */
const idContext = {
  counter: 1,
  prefix: defaultPrefix
}

const {Provider, Consumer} = React.createContext(idContext)

export {Provider, Consumer, defaultPrefix}
