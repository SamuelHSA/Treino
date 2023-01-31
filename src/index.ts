import { AppDataSource } from "./data-source"
import { User } from "./entity/Room"
import 'reflect-metadata';


AppDataSource.initialize().then(async () => {
    const express = require('express')
    const app = express();

    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.name 
    // user.email 
    // user.password 
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)
    
    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    app.post('/', (req, res)=> {
        return res.json('Ok')
    });

    app.use(express.json());
    app.listen(3000, () => console.log('Server started at http://localhost:3000'))

}).catch(error => console.log(error))
