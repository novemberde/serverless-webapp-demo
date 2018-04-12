import * as express from 'express';

class App {
    public app: express.Application;

    constructor () {
        this.app = express();
        this.app.get("/*", (req, res, next) => {
            res.redirect("http://www.awskr.org/slack/");
        });
    }

    public static bootstrap (): App {
        return new App();
    }
}

export default App;