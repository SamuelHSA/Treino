import "reflect-metadata"
import { DataSource } from "typeorm"
import { Room } from "./entity/Room"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root1",
    database: "scoder",
    entities: [`${__dirname}/**/entity/*.{ts,js}`],
    migrations: [`${__dirname}/**/migration/*.{ts,js}`],
    subscribers: [],
});
