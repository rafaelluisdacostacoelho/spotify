# Spotify

Exemplo de uso do GraphQL com NodeJS, Express, Knex e MySQL.

## Algumas considerações sobre problemas encontrados no Windows 10:

Caso se depare com um problema ER_NOT_SUPPORTED_AUTH_MODE, tente executar o comando abaixo no Workbench:

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'`

Após isso exeute o comando npx knex migrate:latest novamente de dentro da pasta src.