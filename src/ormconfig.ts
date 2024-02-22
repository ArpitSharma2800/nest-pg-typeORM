import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    "entities": ["dist/**/*.entity{ .ts,.js}"], // To get all the sata that has database schema's matching the regex
    synchronize: false,
    migrations: [
        'dist/db/migrations/*.js'
    ],

}

export default config;