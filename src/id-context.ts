import React from 'react'

const defaultPrefix = '🆔id-'

const {Provider, Consumer} = React.createContext({
  counter: 1,
  prefix: defaultPrefix
})

interface IdContext {
  counter: number,
  prefix: string
}

export {Provider, Consumer, defaultPrefix, IdContext}
