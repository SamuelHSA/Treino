import { AppDataSource } from "./data-source";
import 'reflect-metadata';
import routes from "./routes";

const express = require('express');

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(express.json());
    app.use(routes)

    return app.listen(3000, () => console.log('Server started at http://localhost:3000'))
}).catch(error => console.log(error));
