import App from './App';
import * as express from 'express';
import * as sls from 'aws-serverless-express';

const app: express.Application = new App().app;
const binaryMimeTypes = [
    "*/*"
];
const server = sls.createServer(app, undefined, binaryMimeTypes);

module.exports.api = (event: any, context: any) => sls.proxy(server, event, context);