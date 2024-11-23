import express from 'express';
const feedbackRouter = express.Router();
import { createFeedback, getFeedbackByEventId } from '../controllers/feedback/index.js';

feedbackRouter.get('/details', getFeedbackByEventId);
feedbackRouter.post('/create', createFeedback);

export default feedbackRouter;