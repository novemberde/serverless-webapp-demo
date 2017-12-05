import App from './App';
import * as express from 'express';

const port: Number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
.on('error', err => {
    console.error(err);
});