import { User } from '../../models/relation.js';
import { createResponse } from '../../middlewares/responseHandler.js'
import { STATUS_CODES } from '../../utils/index.js';

// Get all users
export const getAllUsers = async (res) => {
    try {
        const users = await User.findAll();
        createResponse(res, { status: STATUS_CODES.OK, message: 'Success', response: users })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Fetch Users', response: error.message })
    }
};

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, password, role, gender, designation, phoneNumber } = req.body;
        const newUser = await User.create({ name, email, password, role, gender, designation, phoneNumber });
        createResponse(res, { status: STATUS_CODES.CREATED, message: 'Success', response: newUser })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Create User', response: error.message })
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.query;
        await User.update({ isActive: 0 }, { where: { id } });
        createResponse(res, { status: STATUS_CODES.OK, message: 'Success' })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Delete User', response: error.message })
    }
};
