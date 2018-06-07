import * as express from 'express';
import {Sequelize} from 'sequelize-typescript';
import User from './models/User';
 
const sequelize =  new Sequelize({
    database: 'localhost/go',
    dialect: 'mysql2',
    username: 'root',
    password: '1234',
    modelPaths: [__dirname + '/models']
});

class App {
    public app: express.Application;

    constructor () {
        this.app = express();
        this.app.get("/*", (req, res, next) => {
            res.redirect("http://www.awskr.org/slack/");
        });

        this.app.get("/user", async (req, res, next) => {
            const user = new User({name: "hi", email: "test@test.com", password: "1234"});
            const savedUser = await user.save();

            return res.send(savedUser);
        });
    }

    public static bootstrap (): App {
        return new App();
    }
}

export default App;