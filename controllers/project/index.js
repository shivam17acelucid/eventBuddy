import { Project, ProjectUser } from '../../models/relation.js';
import { STATUS_CODES } from '../../utils/index.js';
import { createResponse } from '../../middlewares/responseHandler.js';

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        createResponse(res, { status: STATUS_CODES.OK, message: 'Success', response: projects })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Fetch Projects', response: error.message })
    }
};

// Create a new project
export const createProject = async (req, res) => {
    try {
        const { name, description, status } = req.body;
        const newProject = await Project.create({ name, description, status });
        createResponse(res, { status: STATUS_CODES.CREATED, message: 'Success', response: newProject })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Create Projects', response: error.message })
    }
};

// Add a user to a project
export const addUserToProject = async (req, res) => {
    try {
        const { projectId, userId } = req.body;
        await ProjectUser.create({ projectId, userId });
        createResponse(res, { status: STATUS_CODES.CREATED, message: 'Success' })
    } catch (error) {
        createResponse(res, { status: STATUS_CODES.INTERNAL_SERVER_ERROR, message: 'Failed to Add User to Projects', response: error.message })
    }
};
