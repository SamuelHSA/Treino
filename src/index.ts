import { AppDataSource } from "./data-source"
import { Room } from "./entity/Room"
import 'reflect-metadata';
import express from 'express'

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json());

    return app.listen(3000, () => console.log('Server started at http://localhost:3000'))
}).catch(error => console.log(error));
