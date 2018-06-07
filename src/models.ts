import {Sequelize} from 'sequelize-typescript';
 
export const sequelize =  new Sequelize({
        database: 'localhost',
        dialect: 'mysql2',
        username: 'root',
        password: '1234',
        modelPaths: [__dirname + '/models']
});