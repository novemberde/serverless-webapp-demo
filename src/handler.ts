import App from './App';
import * as express from 'express';
import * as sls from 'aws-serverless-express';

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

module.exports.app = (event: any, context: any) => sls.proxy(server, event, context);