
module.exports = {
    development: {
        username: "medvl_dev",
        password: "medvl_dev",
        database: "medvl_development",
        host:   process.env.HOST, // use "localhost" if not running with a docker compose
        dialect: "mysql",
        port: 3306
    },
    test: {
      username: "medvl_test",
      password: "medvl_test",
      database: "medeval_test",
      host: "localhost",
      dialect: "mysql"
    },
    production: {
      username: "medeval",
      password: "root_password",
      database: "medeval_prod",
      host: "localhost",
      dialect: "mysql"
    }
};
