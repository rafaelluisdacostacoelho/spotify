# Spotify

Exemplo de uso do GraphQL com NodeJS, Express, Knex e MySQL.

## Primeiros Passos

Aqui eu usei o MySQL com um esquema chamado spotify, mas sinta-se livre para mudar isso se desejar.

Crie um arquivo `.env` dentro da pasta `src` e adicione o comando a seguir.

`
module.exports = {
    password: 'Senha do seu MySQL'
}
`

Execute o comando `npx knex migrate:latest` de dentro da pasta source para criar as tabelas no seu schema spotify.

## Iniciando o Servidor

Execute `npm server.js` de dentro da pasta `src`.

## Algumas considerações sobre problemas encontrados no Windows 10

Ao executar o `migrate`, caso se depare com um problema ER_NOT_SUPPORTED_AUTH_MODE, tente executar o comando abaixo no Workbench:

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'`

Após isso exeute o comando `npx knex migrate:latest` novamente de dentro da pasta `src`.