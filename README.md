# serverless-webapp-demo
Serverless webapp demo application for w3c conference in Korea

# How to

Fork this git

Requirement
- node version 8.x
- npm version 5.x

```sh
$ npm install
$ npm start
```

Integration to Circle CI

- Create Project using forked git
- Create AWS User who has the permission on API Gateway, Lambda, S3, CloudFormation
- Import AWS AccessKey on Circle CI


Finally, git commit.

All your works deploy automatically on every single commit.