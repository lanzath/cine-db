# <p align="center"> Cine Database Project

O projeto consiste em um pequeno sistema de catálogo de filmes, onde é possível visualizar o catálogo e inserir um novo filme ao mesmo.

Tanto o front-end quanto o back-end estão em pasta separadas e organizados.

## Tecnologias
### Back-end
A REST API foi feita em [PHP 7.4](https://www.php.net/) e [Lumen](https://lumen.laravel.com/) e banco de dados [SQLite3](https://www.sqlite.org/index.html).

Para configuração na máquina local é necessário ter o [PHP 7.4](https://www.php.net/) e o [Composer](https://getcomposer.org/) instalados.

Crie na basta back-end um arquivo `.env` com o contéudo do `.env.example` ou apenas renomeie este para apenas `.env`.

Com o terminal aberto na pasta back-end rode os seguintes comandos:

- `touch database/database.sqlite` 
- `composer install`
- `php artisan migrate --seed`

Para rodar o server local basta rodar o comando:
**`php -S localhost:8000 -t public`** conforme indica a documentação do [Lumen](https://lumen.laravel.com/docs/8.x#installation).

### Front-end
O front-end é uma SPA criada com [Angular 10](https://angular.io/), [Bootstrap](https://getbootstrap.com/) e [FontAwesome](https://fontawesome.com/).

Para instalar o projeto é necessário ter o [Npm](https://nodejs.org/en/)/[Yarn](https://classic.yarnpkg.com/en/) e [Angular CLI](https://cli.angular.io/) instalados.

Após o server estar em execução na pasta front-end execute os seguintes comandos:
- `npm i` (`yarn install` se preferir o yarn)
- `ng s -o`
