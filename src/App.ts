import * as express from 'express';
import { Observable, Observer } from 'rxjs';

class App {
    public app: express.Application;
    public helloObservable: Observable<string>;

    constructor () {
        this.app = express();
        this.helloObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next("rxjs is working on express server!");
            }, 3000);
        });

        this.app.get("/", (req, res, next) => {
            res.redirect("http://www.awskr.org/slack/");
        });
        this.app.get("/rx", (req, res, next) => {
            this.helloObservable.subscribe(str => res.send(str));
        });

        this.app.use((req, res, next) => {
            res.status(404).send("Not found");
        });
    }

}

export default App;