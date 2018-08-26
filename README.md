# react-id

[![Travis](https://travis-ci.com/Rowno/react-id.svg?branch=master)](https://travis-ci.com/Rowno/react-id)

`react-id` is a React component for generating stable unique IDs. It's useful for when you need to generate a unique ID for `id`, `for` or `aria` attributes and it needs to be stable for server rendering.

Normally you'd generate these kinds of IDs by incrementing a counter in your module. The problem is that when you're server rendering the counter won't be reset on each page render, causing the server and client to become out of sync. This then causes React to output warning like this:
```
Warning: Prop `htmlFor` did not match. Server: "id-12" Client: "id-0"
```

`react-id` fixes this by using React's context API to scope the ID counter to each page render.


## License

react-id is released under the ISC license.

Copyright © 2018, Roland Warmerdam.
