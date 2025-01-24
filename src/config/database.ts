import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import path from 'path';
import { User } from '../models/User';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.NODE_ENV === 'test' 
    ? process.env.DB_DATABASE_TEST || 'focus_todo_test'
    : process.env.DB_DATABASE || 'focus_todo',
};

export const AppDataSource = new DataSource({
  type: 'mysql',
  ...dbConfig,
  synchronize: false,
  logging: process.env.NODE_ENV === 'development',
  entities: [User],
  migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
});

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database has been initialized!');
  } catch (error) {
    console.error('Error during database initialization:', error);
    throw error;
  }
};
