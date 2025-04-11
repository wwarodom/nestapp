<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Nest.js Project
### Installation
* git clone https://github.com/wwarodom/nestapp
* cd nestapp
* npm i
* rename .env.example to .env

### Postgresql Database on Docker
* cd db
* $ docker-compose up -d

### Start Nest service (port :3000)
* npm run start:dev

Note that, you need to have Docker installed in your computer.

### Description
This git repo is originated from Dr. Kittasil Silanon, teaching the backend side. I modified some codes and adding docker-compose.yaml for Postgresql Database setting. You can test the API via postman.

### Test API
You can import all Postman scripts to test APIs from /postman/TestNestJS.postman_collection.json.

### API Testing
* Postman: Desktop App
* Postman: Streamline API develoment