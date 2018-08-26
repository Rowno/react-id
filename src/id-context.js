import React from 'react'

const defaultPrefix = '🆔id-'

const {Provider, Consumer} = React.createContext({
  counter: 1,
  prefix: defaultPrefix
})

export {Provider, Consumer, defaultPrefix}
