import * as express from 'express';
import * as sls from 'aws-serverless-express';

class App {
    public app: express.Application;

    constructor () {
        this.app = express();
        this.app.get("/*", (req, res, next) => {
            res.send("Hello from simple api");
        });
    }

    public static bootstrap (): App {
        return new App();
    }
}

const app: express.Application = new App().app;
const binaryMimeTypes = [
	'application/javascript',
	'application/json',
	'application/octet-stream',
	'application/xml',
	'font/eot',
	'font/opentype',
	'font/otf',
	'image/jpeg',
	'image/png',
	'image/svg+xml',
	'text/comma-separated-values',
	'text/css',
	'text/html',
	'text/javascript',
	'text/plain',
	'text/text',
	'text/xml'
];
const server = sls.createServer(app, undefined, binaryMimeTypes);

export const api = (event: any, context: any) => sls.proxy(server, event, context);