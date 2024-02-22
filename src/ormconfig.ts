import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "predator",
    entities: ['dist/src/**/*.entities.js'], // To get all the sata that has database schema's matching the regex
    synchronize: true
}

export default config;