import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { sequelize } from './configs/sequelize.js';
import eventRouter from './routes/event.js';
import feedbackRouter from './routes/feedback.js';
import userRouter from './routes/user.js';
import projectRouter from './routes/project.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/event', eventRouter);
app.use('/feedback', feedbackRouter);
app.use('/user', userRouter);
app.use('/project', projectRouter);

const startServer = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
        console.log('Connection to database has been established successfully.');
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`PORT is running on ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the databases:', error);
    }
};

startServer();
