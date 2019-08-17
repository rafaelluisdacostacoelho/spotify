# Spotify

API de exemplo em que utilizo **GraphQL**, **NodeJS**, **Express**, **Knex** e **MySQL**.

## Primeiros Passos

Aqui eu usei o **MySQL** com um esquema chamado *spotify*, mas sinta-se livre para mudar isso se desejar.

Crie um arquivo **.env** dentro da pasta **src** e adicione o comando a seguir.

```javascript
module.exports = {
    password: 'Senha do seu MySQL'
}
```

Execute o comando `npx knex migrate:latest` de dentro da pasta source para criar as tabelas no seu schema spotify.

## Iniciando o Servidor

Execute `node server.js` de dentro da pasta `src`.

## Vamos adicionar alguns dados via mutation

```graphql
mutation {
  albums {
    create(album: {title: "Powerslave", year: 1984}) {
      id
      title
      year
    }
  }
  artists {
    create(artist: {name: "Bruce Dickinson"}) {
      id
      name
    }
  }
  genres {
    create(genre: {name: "Heavy Metal"}) {
      id
      name
    }
  }
  musics {
    create(music: {name: "Aces High", duration: "4:32", url: "https://www.youtube.com/watch?v=Xg9aQvjMS60"}) {
      id
      name
      duration
      url
    }
  }
  playlists {
    create(playlist: {name: "Favorites"}) {
      id
      name
    }
  }
}
```

## Agora você pode realizar umas consultas sobre esses dados
```graphql
{
  albums {
    id
    title
    year
    musics {
      id
      name
      duration
      url
      genre {
        id
        name
      }
    }
    artists {
      id
      name
    }
  }
  artists {
    id
    name
  }
  genres {
    id
    name
  }
  musics {
    id
    name
    duration
    url
    genre {
      id
      name
    }
  }
  playlists {
    id
    name
    musics {
      id
      name
      duration
      url
      genre {
        id
        name
      }
    }
  }
}
```

## Algumas considerações sobre problemas encontrados no Windows 10

Ao executar o `migrate`, caso se depare com um problema ER_NOT_SUPPORTED_AUTH_MODE, tente executar o comando abaixo no Workbench:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'
```

Após isso exeute o comando `npx knex migrate:latest` novamente de dentro da pasta `src`.

# Referências

* [Text Driven Development with Node](https://mherman.org/blog/test-driven-development-with-node/)

* [Knex bag'o functions modeling many-to-many relationships in Node 2](https://alexzywiak.github.io/knex-bag-o-functions-modeling-many-to-many-relationships-in-node-2/index.html)