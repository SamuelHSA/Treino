import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import 'reflect-metadata';

const express = require('express')
const app = express();


AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.name = "Alek"
    user.email = "dev@dev.com"
    user.password = "1234"
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

}).catch(error => console.log(error))


app.use(express.json());
app.listen(3000, () => console.log('Server started at http://localhost:3000'))