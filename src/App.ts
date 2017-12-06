import * as express from 'express';

class App {
    public app: express.Application;

    constructor () {
        this.app = express();
        this.app.get("/*", (req, res, next) => {
            res.send("Welcome to w3c conference!");
        });
    }

    public static bootstrap (): App {
        return new App();
    }
}

export default App;