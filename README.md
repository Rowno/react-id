# react-id

[![Travis](https://travis-ci.com/Rowno/react-id.svg?branch=master)](https://travis-ci.com/Rowno/react-id)

`react-id` is a React component for generating stable unique IDs. It's useful for when you need to generate unique IDs for `id`, `for` or `aria` attributes and they need to be stable for server rendering.

Normally you'd generate these kinds of IDs by incrementing a counter in your module. The problem is that when you're server rendering the counter won't get reset after each page render, causing the server and client to become out of sync. This then causes React to output warnings like this one:
```
Warning: Prop `htmlFor` did not match. Server: "id-12" Client: "id-0"
```

`react-id` fixes this by using React's context API to scope the ID counter to each page render.


## Install

```sh
yarn add react-id
# or
npm install react-id
```


## Usage

```jsx
<IdProvider>
  <Id>
    {id => (
      <div>
        <label htmlFor={id}>Email:</label>{' '}
        <input type="email" id={id} />
      </div>
    )}
  </Id>
</IdProvider>
```


## API

### `Id`

`Id` is a render props component that returns a unique ID as it's only parameter. It should be nested inside an `IdProvider`, though if you're not server rendering you can omit the `IdProvider` and `Id` will use the default global context.

### `IdProvider`

`IdProvider` sets up the React context. You should initialise it once at the root of your application, like you would with Redux or Apollo. Though you can initialise multiple `IdProvider`'s with different prefixes (and even nest them) if you really want.

It takes the following props:

#### `prefix`

Type: `string`<br>
Default: `🆔id-`

Sets the ID prefix. This should be something unique that's unlikely to conflict with any other IDs on the page.


## License

react-id is released under the ISC license.

Copyright © 2018, Roland Warmerdam.
