import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

export const app = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    callback(null, "Hello world from simple API");
};