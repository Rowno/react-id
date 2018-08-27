/* eslint-disable typescript/no-var-requires */
const babelRegister = require('@babel/register')
const {configure} = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

babelRegister({
  extensions: ['.js', '.ts', '.tsx'],
  ignore: ['node_modules/*', 'test/*']
})

configure({adapter: new Adapter()})
