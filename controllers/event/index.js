import { Feedback, Event } from "../../models/relation.js";
import { createResponse } from '../../middlewares/responseHandler.js';
import { STATUS_CODES } from '../../utils/index.js';

export const createEvent = async (req, res) => {
    const { name, createdBy, description } = req.body;
    if (!name || !createdBy || !description) return { status: STATUS_CODES.UNPROCESSABLE_ENTITY, message: 'Event Name, Description and Creator Required' }
    try {
        const event = await Event.create({ name, createdBy, description });
        createResponse(res, { status: STATUS_CODES.CREATED, message: 'Success', response: event })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: error, response: error.message })
    }
}

// Get all events
export const getEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            where: {
                isActive: 1
            },
            include: {
                model: Feedback,
                where: {
                    isActive: 1
                }
            }
        });
        createResponse(res, { status: STATUS_CODES.OK, message: 'Success', response: events })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to fetch events', response: error.message })
    }
}

export const deleteEvent = async (req, res) => {
    let { eventId } = req.body;
    if (!eventId) return { status: STATUS_CODES.UNPROCESSABLE_ENTITY, message: 'Event Id Required' }
    try {
        await Event.update({ isActive: 0 }, {
            where: {
                eventId: eventId
            }
        });
        createResponse(res, { status: STATUS_CODES.OK, message: 'Success' })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Delete Event', response: error.message })
    }
}