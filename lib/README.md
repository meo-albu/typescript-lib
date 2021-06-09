## Install

- generate a 'Github Personal Access Token'. To download and install packages from a repository, your token must have the read:packages scope, and your user account must have read permissions for the repository.
- create .npmrc file in the root of the project and paste the following:

```bash
//npm.pkg.github.com/:_authToken=YOUR_ACCESS_TOKEN
@meo-albu:registry=https://npm.pkg.github.com/
```

```bash
npm install @meo-albu/lib
```

## Usage

```tsx
import React from 'react'

import {Heading} from '@meo-albu/lib'

export default function App():React.FC {
  return (
    <Heading level={1}>Hello, Typescript</Heading>
  )
}
```

## License

MIT © [meo-albu](https://github.com/meo-albu)
