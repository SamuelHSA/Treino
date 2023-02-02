import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root1",
    database: "scoder",
    entities: [`${__dirname}/**/entity/*.{js,ts}`],
    migrations: [`${__dirname}/**/migrations/*.{js,ts}`],
    subscribers: [],
});

AppDataSource.initialize().then(async () => {
    console.log("Connection initialized with database...");
  }).catch((error) => console.log(error));
