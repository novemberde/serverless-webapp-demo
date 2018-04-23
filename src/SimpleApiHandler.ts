import { APIGatewayEvent, Context, Callback } from 'aws-lambda';

const SimpleApiHandler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
    callback(null, "Hello world from simple API");
};

export default SimpleApiHandler;