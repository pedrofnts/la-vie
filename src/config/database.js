module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      database: "auth"
    }
  },
  production: {
    client: "mysql",
    connection: {
      host: "us-cdbr-east-06.cleardb.net",
      user: "be5ec547bcb702",
      password: "7fbba3a2",
      database: "heroku_e214d62439cf1c8"
    }
  }
}
