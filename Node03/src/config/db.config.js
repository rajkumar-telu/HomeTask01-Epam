import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('test', 'postgres', 'raj', {
    host: 'localhost',
    dialect: 'postgres'
});
