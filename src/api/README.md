`
{
  artists {
    id
    name
  }
}
`

`
mutation {
  artist {
    create(artist: {name: "Bruce Dickinson"}) {
      id
      name
    }
  }
}
`