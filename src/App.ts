import * as express from 'express';
import { Observable, Observer, AsyncSubject } from 'rxjs';

class App {
    public app: express.Application;
    public helloObservable: Observable<string>;
    public helloAsyncSubject: AsyncSubject<string>;

    constructor () {
        this.app = express();
        this.helloObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next("rxjs is working on express server!");
            }, 3000);
        });
        this.helloAsyncSubject = new AsyncSubject();

        this.app.get("/", (req, res, next) => {
            res.redirect("http://www.awskr.org/slack/");
        });
        this.app.get("/rx", (req, res, next) => {
            this.helloObservable.subscribe(str => res.send(str));
        });
        this.app.get("/asyncrx", (req, res, next) => {
            this.helloAsyncSubject.subscribe({
                next: str => {
                    setTimeout(() => {
                        res.send(str)
                    }, 3000);
                },
            });
            this.helloAsyncSubject.next("AsyncSubject is working!");
            this.helloAsyncSubject.complete();
        });

        this.app.use((req, res, next) => {
            res.status(404).send("Not found");
        });
    }

}

export default App;