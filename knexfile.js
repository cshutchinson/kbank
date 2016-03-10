module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/kbank'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
