<div>
  <img src="https://user-images.githubusercontent.com/90655270/161388302-145d58d6-723a-4dc1-97e7-80133dfa4c3a.png" width="100px">
  <img alt="Stack Hacker" src="https://img.shields.io/static/v1?label=stack&message=hacker&color=success&labelColor=grey">
</div>

<h1 align="center">La Vie</h1>

<p align="center">This project consists of an API for a clinic to manage psychologists, patients and medical records.</p>
<p align="center"><a href="https://insomnia.rest/run/?label=La%20Vie%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fpedrofnts%2Fla-vie%2Fmain%2Fdocs%2Finsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</a></p>

## Techs

- Node.js
- Express.js
- Sequelize ORM
- MySQL

## Features

- Login (JWT Authentication)
- Dashboard
- Psychologists CRUD
- Patients CRUD
- Appointments CRUD 

## Documentation

View the documentation on <a href="https://la-vie-sand.vercel.app/">Vercel.</a>

## Deployment

La Vie's API was deployed on Heroku. See API documentation for acessing online routes.

## Local Project

To run this project locally, you'll need Git, Node and MySQL installed on your computer. 

After cloning project, remember to insert your local database credentials into src/config/database.js.

```bash
# Clone this repository
$ git clone https://github.com/pedrofnts/la-vie.git

# Go into the repository
$ cd la-vie

# Install dependencies
$ npm install

# Create database
$ npx sequelize db:create

# Run migrations
$ npx sequelize db:migrate

# Run server
$ npm run dev

# running on port 8000
