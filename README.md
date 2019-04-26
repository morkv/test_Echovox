###

#### `npm start`
  1. in root dir: `npm install`;
  2. cd client: `run install`;

#### `dev`
  in root dir: `npm run dev`

#### DB => uuid from prev. variant without DB.
```
    items: [
        {
            _id: uuid(),
            name: 'Document 1',
            desc: 'Document 1 Description'
        },
        {
            _id: uuid(),
            name: 'Document 2',
            desc: 'Document 2 Description'
        },
        {
            _id: uuid(),
            name: 'Protocol 1',
            desc: 'Protocol 1 Description'
        },
        {
            _id: uuid(),
            name: 'Document 3',
            desc: 'Document 3 Description'
        },
        {
            _id: uuid(),
            name: 'Document 4',
            desc: 'Document 4 Description'
        },
        {
            _id: uuid(),
            name: 'Protocol 2',
            desc: 'Protocol 2 Description'
        }
    ].
    loading: false
```