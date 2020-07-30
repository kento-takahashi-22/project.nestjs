import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user';
import { config } from './config/config';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize(
                config[process.env.NODE_ENV || 'development']
            );
            sequelize.addModels([User]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
