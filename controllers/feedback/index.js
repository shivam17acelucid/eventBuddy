import { Feedback } from "../../models/relation.js";
import { createResponse } from '../../middlewares/responseHandler.js';
import { STATUS_CODES } from '../../utils/index.js';

export const createFeedback = async (req, res) => {
    const { eventId, createdBy, feedback } = req.body;
    if (!eventId || !createdBy || !feedback) return { status: STATUS_CODES.UNPROCESSABLE_ENTITY, message: 'Event, Feedback and Creator Required' }
    try {
        const event = await Feedback.create({ eventId, createdBy, feedback });
        createResponse(res, { status: STATUS_CODES.CREATED, message: 'Success', response: event })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to post feedback', response: error.message })
    }
}

export const getFeedbackByEventId = async (req, res) => {
    const { eventId } = req.query;
    if (!eventId) return { status: STATUS_CODES.UNPROCESSABLE_ENTITY, message: 'Event Id Required' }
    try {
        const feedbacks = await Feedback.findAll({ where: { eventId: eventId } });
        createResponse(res, { status: STATUS_CODES.OK, message: 'Success', response: feedbacks })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to fetch feedback', response: error.message })
    }
}