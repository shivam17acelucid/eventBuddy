import express from 'express';
const eventRouter = express.Router();
import { createEvent, getEvents, deleteEvent } from '../controllers/event/index.js';


eventRouter.get('/list', getEvents);
eventRouter.post('/create', createEvent);
eventRouter.put('/delete', deleteEvent);

export default eventRouter;