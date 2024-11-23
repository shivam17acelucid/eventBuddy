import express from 'express';
const projectRouter = express.Router();
import {
    addUserToProject, getAllProjects,
    createProject
} from '../controllers/project/index.js';

projectRouter.get('/list', getAllProjects);
projectRouter.post('/create', createProject);
projectRouter.post('/addUser', addUserToProject);


export default projectRouter;